const db = require("../lib/db")


/*Get All couses*/

const getAllCourses = async () => {
    const allCourses = await db.course.findMany({
        where: {
            isDeleted: false
        }
    })
    return allCourses
}

/* Get Course By Name */
const getCourseByName = async ({ name }) => {
    const isCourseExist = await db.course.findFirst({
        where: {
            courseName: name
        }
    })

    return isCourseExist;
}



/* Create Course */
const createCourse = async (data) => {
    const createCourseResponse = await db.course.create({
        data: {
            ...data,

            categories: {
                connect: data.categories.map((category) => ({
                    category: category.value,
                })),
            },

        }
    })



    return createCourseResponse;
}

/* Get course by id */

const getCourseById = async ({ courseId }) => {
    const getCourseResponse = await db.course.findFirst({
        where: {
            id: courseId,
            createdById: teacherId,
            isDeleted: false
        }
    })

    return getCourseResponse;
}



module.exports = {
    getCourseByName,
    createCourse,
    getCourseById,
    getAllCourses
}