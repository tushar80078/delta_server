const db = require("../lib/db")

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




module.exports = {
    getCourseByName,
    createCourse
}