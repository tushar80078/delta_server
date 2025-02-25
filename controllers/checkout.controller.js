const Stripe = require("stripe");
const db = require("../lib/db");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


/* Checkout Session Controller Stripe */
exports.postCheckoutSession = async (req, res, next) => {
    try {
        const { cartCourses, userId } = req.body;
        const courseIds = cartCourses.map((c) => c.id);

        const line_items = cartCourses.map((course) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: course?.courseName,
                    description: course?.courseDescription,
                },
                unit_amount: Math.round(course?.courseFees * 100),
            },
            quantity: 1,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items,
            success_url: `${process.env.FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}/cart`,
            metadata: {
                userId: userId,
                courseIds: courseIds.join(","),
            },
        });

        await db.transaction.create({
            data: {
                userId: userId,
                transactionId: session.id,
                amount: session.amount_total / 100,
                status: "Pending",
                transactionCourses: {
                    create: courseIds.map((id) => ({ courseId: id, userId })),
                },
            },
        });

        return res.status(200).send({
            success: true,
            msg: "Stripe Session Initialized!",
            data: {
                sessionId: session.id,
                url: session.url,
            },
        });
    } catch (error) {
        return next(error);
    }
};

/* Stripe Webhook Trigger Controller */
exports.postWebHookController = async (req, res, next) => {
    try {
        const event = req.body;

        if (event.type === "checkout.session.completed") {
            const session = event.data.object;
            const userId = session.metadata.userId;
            const courseIds = session.metadata.courseIds.split(",");
            const transactionId = session.id;

            // ✅ Update transaction status to "Paid"
            await db.transaction.update({
                where: { transactionId },
                data: { status: "Paid" },
            });



            // ✅ Remove purchased courses from cartCourses
            await db.user.update({
                where: { id: userId },
                data: {
                    cartCourses: {
                        disconnect: courseIds.map((id) => ({ id })), // ✅ Properly disconnecting relations
                    },
                    enrolledCourses: {
                        connect: courseIds.map((id) => ({ id })),
                    }
                },
            });

            return res.status(200).json({ received: true });
        }

        res.status(400).json({ error: "Unhandled event type" });
    } catch (error) {
        console.error("Error in postWebHookController:", error);
        return next(error); // ✅ Forward the error
    }
};
