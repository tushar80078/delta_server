
const db = require("../lib/db");
const { getCourseById, createCourse } = require("../services/course.service");

/* Create Course */
exports.postCreateCourse = async (req, res, next) => {
    try {
        const payloadData = {
            ...req.body,
            isFree: req.body.isFree === 'true',
            categories: JSON.parse(req.body.categories),
            courseFees: parseFloat(req.body.courseFees),
        };
        const files = req.file;
        // TODO:Upload thumnailimage and add to create course option

        const createCourseResponse = await createCourse({ ...payloadData, tokenData: undefined });


        return res.status(200).send({
            success: true,
            msg: "Course Created Successfully",
            data: createCourseResponse,
        });
    } catch (error) {
        return next(error);
    }
};

/* Get Courses */
exports.getAllCourses = async (req, res, next) => {
    try {

        const { page = 1, pageSize = 10, category = "All" } = req.body;
        const { teacherId } = req.params;

        if (page <= 0 || pageSize <= 0) {
            return next({
                statusCode: 400,
                message: `Page and pageSize must be greater than 0`,
            })
        }

        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const courses = await db.course.findMany({
            where: {
                isDeleted: false,
                ...(category !== "All" && {
                    categories: {
                        some: {
                            category,
                        },
                    },
                }),
                createdById: teacherId
            },
            include: {
                categories: true
            },
            skip,
            take,
            orderBy: {
                createdAt: "desc",
            },
        });

        const totalCourses = await db.course.count({
            where: {
                isDeleted: false,
                ...(category !== "All" && {
                    categories: {
                        some: {
                            category,
                        },
                    },
                }),
                createdById: teacherId
            },
        });

        const totalPages = Math.ceil(totalCourses / pageSize);


        return res.status(200).send({
            success: true,
            msg: "Courses fetched successfully",
            data: courses,
            meta: {
                currentPage: page,
                pageSize,
                totalPages,
                totalCourses,
            },
        });
    } catch (error) {
        return next(error);
    }
};

/* Get course by id */
exports.getCourseById = async (req, res, next) => {
    try {
        const { courseId, teacherId } = req.params;

        const getCourseResponse = await getCourseById({ courseId, teacherId });

        return res.status(200).send({
            success: true,
            msg: 'Course fetched successfully!',
            data: getCourseResponse,
        })

    } catch (error) {
        next(error);
    }
}