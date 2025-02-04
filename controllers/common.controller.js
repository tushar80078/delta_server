const db = require("../lib/db");
const { getAllCourseCategories } = require("../services/category.service");
const { getAllCourses } = require("../services/course.service");


exports.allCategoryAndCourses=async(req,res,next)=>{
    try {
        const allCategories= await getAllCourseCategories()
        const allCourses= await getAllCourses()

        return res.status(200).send({
            success:true,
            categoryData:allCategories,
            courseData:allCourses,
            message:"Data fetched successfully"

        })

        
    } catch (error) {
        throw next(error);
        
        
    }

    

}