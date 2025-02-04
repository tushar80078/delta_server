const db = require("../lib/db");
const { getAllCourseCategories } = require("../services/category.service");
const { getAllCourses } = require("../services/course.service");


exports.allCategoryAndCourses = async (req, res, next) => {
    try {
        // TODO:Add logic for get top-5 categoreis
        const allCategories = await getAllCourseCategories()
        // TODO:Add logic for get top-5 courses
        const allCourses = await getAllCourses()

        return res.status(200).send({
            success: true,
            msg: "Data fetched successfully",
            data: {
                categoryData: allCategories,
                courseData: allCourses,
            },
        })


    } catch (error) {
        throw next(error);


    }



}