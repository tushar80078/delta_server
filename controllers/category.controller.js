const db = require("../lib/db");
const { getAllCourseCategories } = require("../services/category.service");

/* Get All Categories */
exports.getAllCategories = async (req, res, next) => {
    try {

        const allCategories = await getAllCourseCategories();

        return res.status(200).send({
            success: true,
            msg: "Category Fetched",
            data: allCategories,
        });
    } catch (error) {
        return next(error);
    }
};