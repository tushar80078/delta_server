const db = require("../lib/db")

/** Get all lesson */
const getAllLessonsData = async () => {
    const allLessonData = await db.courseLessons.findMany()
    return allLessonData
}

/** Get lesson by lesson name */
const getLessonByName = async ({ name }) => {
    const isLessonExist = await db.courseLessons.findFirst({
        where: {
            lessonName: name
        }
    })
    return isLessonExist
}

/* Create Lesson */
const createLesson = async (data) => {

    const createLesson = await db.courseLessons.create({
        data: {
            ...data,
        },
    })

    return createLesson
}

/*  Get lesson by id */

const getLessonById = async ({ lessonId }) => {
    const getlessonResponse = await db.courseLessons.findFirst({
        where: {
            id: lessonId
        }
    })

    return getlessonResponse
}

/* Get lesson Sequence*/
const getLessonSequence = async ({ courseId }) => {
    // Fetch the maximum sequence number for the course
    const maxSequenceLesson = await db.courseLessons.findFirst({
        where: { courseId },
        orderBy: { sequenceNumber: "desc" },
        select: { sequenceNumber: true },
    });

    // If no lessons exist, default to 1
    const nextSequenceNumber = maxSequenceLesson ? maxSequenceLesson.sequenceNumber + 1 : 1;

    return nextSequenceNumber;
}

module.exports = {
    getLessonByName,
    createLesson,
    getLessonById,
    getAllLessonsData,
    getLessonSequence
}