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


/* Get Lesson By Id */

exports.getLessonByID = async (req, res, next) => {
    try {

        const { lessonId } = req.params;

        const getLessonResponse = await getLessonById({ lessonId })

        if (!getLessonResponse) {
            return next({
                statusCode: 400,
                message: `Chapter not found with given lesson id`,
            });
        }

        return res.status(200).send({
            success: true,
            msg: "Chapter Details Fetched Successfully!",
            data: getLessonResponse
        })
    } catch (error) {
        next(error)
    }
}

