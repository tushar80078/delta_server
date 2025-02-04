const db = require("../lib/db")

/* Get All Course Categories */

const getAllCourseCategories = async () => {
    const allCourseCategories = await db.courseCategories.findMany();

    return allCourseCategories;
}


/* Get Category By Name */
const getCategoryByName = async ({ category }) => {
    const getCategoriesResponse = await db.courseCategories.findUnique({
        where: {
            category: category
        }
    })

    return getCategoriesResponse;
}

/* Create Category  */
const createCategory = async ({ category }) => {
    const createCategoryResponse = await db.courseCategories.create({
        data: {
            category: category,
        }
    })

    return createCategoryResponse;
}


module.exports = {
    getAllCourseCategories,
    createCategory,
    getCategoryByName
}