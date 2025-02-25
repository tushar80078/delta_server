const express = require("express");
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

app.use(express.json());
app.use(cors());

const errorMiddleware = require("./helper/middlewares/errorMiddlewares");
const routes = require("./routes/allRoutes.routes");
const swaggerDoc = require("./documentation/swagger");

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/test", function (req, res, next) {
    res.send(`<html><body><h1>Server Started</h1></body></html>`);
});

// app.post("/webhook", async (req, res) => {
//     const event = req.body;

//     console.log('here');

//     try {
//         if (event.type === "checkout.session.completed") {
//             const session = event.data.object;

//             const userId = session.metadata.userId;
//             const courseIds = session.metadata.courseIds.split(",");

//             // Store transaction in DB
//             await db.transaction.create({
//                 data: {
//                     userId,
//                     courses: {
//                         connect: {
//                             id: 'cm7bomrau0001xj0e5uhj8o9u'
//                         }
//                     },
//                     transactionId: session.id,
//                     amount: session.amount_total / 100, // Convert from cents
//                     status: "Paid",
//                 },
//             });

//             res.status(200).json({ received: true });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Webhook error");
//     }
// });


app.use("/", routes);

app.use(errorMiddleware);

module.exports = app;
