const db = require("../lib/db")
const {
    createLesson,
    getLessonByName,
    getLessonById,
    getAllLessonsData,
    getLessonSequence
} = require("../services/lesson.service")


/* Create lesson */
exports.postCreateLesson = async (req, res, next) => {

    try {
        const isLessonNameExist = await getLessonByName({ name: req.body.lessonName });

        if (isLessonNameExist) {
            return res.json({
                success: false,
                message: "Lesson name already exist"
            })

        }

        const payloadData = {
            ...req.body,
            isFree: req.body.isFree === true
        }

        const getLessonSequnceNumber = await getLessonSequence({ courseId: req.body.courseId });

        const createLessonResponse = await createLesson({ ...payloadData, sequenceNumber: getLessonSequnceNumber, tokenData: undefined })

        return res.status(200).json({
            success: true,
            message: "Lesson Created Successfully",
            data: createLessonResponse
        })

    } catch (error) {
        return next(error)
    }
}

/* Gel All Lessons */
exports.getAllCourseLessonsByPagination = async (req, res, next) => {
    try {
        const { page = 1, pageSize = 10, courseId, pagination = true } = req.body;

        // Validate page and pageSize if pagination is true
        if (pagination && (page <= 0 || pageSize <= 0)) {
            return next({
                statusCode: 400,
                message: `Page and pageSize must be greater than 0`,
            });
        }

        let lessonResponse;

        if (pagination) {
            const skip = (page - 1) * pageSize;
            const take = pageSize;

            // Fetch lessons with pagination
            lessonResponse = await db.courseLessons.findMany({
                where: {
                    courseId: courseId,
                },
                skip,
                take,
                orderBy: {
                    createdAt: "desc",
                },
            });

            const totalLessons = await db.courseLessons.count({
                where: {
                    courseId: courseId,
                },
            });

            const totalPages = Math.ceil(totalLessons / pageSize);

            return res.status(200).json({
                success: true,
                message: "Lesson Fetched Successfully",
                data: lessonResponse,
                meta: {
                    currentPage: page,
                    pageSize,
                    totalPages,
                    totalLessons,
                },
            });
        } else {
            // Fetch all lessons without pagination
            lessonResponse = await db.courseLessons.findMany({
                where: {
                    courseId: courseId,
                },
                orderBy: {
                    createdAt: "desc",
                },
            });

            return res.status(200).json({
                success: true,
                message: "Lesson Fetched Successfully",
                data: lessonResponse,
            });
        }


    } catch (error) {
        return next(error);
    }
};


//get lesson by id

exports.getLessonByID = async (req, res, next) => {
    try {
        const { lessonId } = req.params

        const getLessonResponse = await getLessonById({ lessonId })

        if (getLessonResponse) {
            return res.status(200).send({
                success: true,
                messgae: "Lesson Fetched Successfully",
                data: getLessonResponse
            })

        }
        return res.status(404).send({
            success: false,
            messgae: "thid id lesson not present",
        })



    } catch (error) {
        next(error)

    }
}

