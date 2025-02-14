const db = require("../lib/db");

// TODO:MOVE DB LOGIC TO SERVICE
exports.addCourseToCart = async (req, res, next) => {
    try {
        const { userId, courseId } = req.body;

        // Check if the course is already in the user's cart
        const isCourseAlreadyInCart = await db.user.findFirst({
            where: {
                id: userId,
                cartCourses: {
                    some: { id: courseId },
                },
            },
            include: {
                cartCourses: true
            }
        });

        if (isCourseAlreadyInCart) {
            return res.status(200).json({
                success: true,
                msg: "Course already added to cart",
                data: isCourseAlreadyInCart
            });
        }

        // Add course to the user's cart
        const response = await db.user.update({
            where: { id: userId },
            data: {
                cartCourses: {
                    connect: { id: courseId }, // Connect the course to cartCourses
                },
            },
            include: {
                cartCourses: true
            }
        });

        return res.status(200).json({
            success: true,
            msg: "Course added to cart successfully",
            data: response
        });

    } catch (error) {
        next(error);
    }
};

exports.getCartCoursesOfUser = async (req, res, next) => {
    try {
        const { userId } = req.params;


        // Add course to the user's cart
        const response = await db.user.findFirst({
            where: {
                id: userId
            },
            include: {
                cartCourses: true
            }
        });

        return res.status(200).json({
            success: true,
            msg: "Cart Courses Fetched Successfully",
            data: response
        });

    } catch (error) {
        next(error);
    }
};
