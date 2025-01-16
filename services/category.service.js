const db = require("../lib/db")

/* Get All Course Categories */
const getAllCourseCategories = async () => {
    const allCourseCategories = await db.courseCategories.findMany();

    return allCourseCategories;
}


module.exports = {
    getAllCourseCategories
}