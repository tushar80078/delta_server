const db = require("../lib/db");
const { getAllCourseCategories, createCategory, getCategoryByName } = require("../services/category.service");

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

/* Get All Categories With Pagination */
exports.getAllCategoriesWithPagination = async (req, res, next) => {
    try {
        const { page = 1, pageSize = 10 } = req.body;

        if (page <= 0 || pageSize <= 0) {
            return next({
                statusCode: 400,
                message: `Page and pageSize must be greater than 0`,
            })
        }

        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const categoriesResponse = await db.courseCategories.findMany({
            where: {
                isDeleted: false,
            },
            skip,
            take,
            orderBy: {
                createdAt: "desc",
            },
        });

        const totalCategories = await db.courseCategories.count({
            where: {
                isDeleted: false,
            },
        });

        const totalPages = Math.ceil(totalCategories / pageSize);

        return res.status(200).send({
            success: true,
            msg: "Categories fetched successfully",
            data: categoriesResponse,
            meta: {
                currentPage: page,
                pageSize,
                totalPages,
                totalCategories,
            },
        });
    } catch (error) {
        return next(error);
    }
};

/* Create Category */
exports.postCreateCategory = async (req, res, next) => {
    try {

        const { category } = req.body;

        const isCategoryExist = await getCategoryByName({ category });

        if (isCategoryExist) {
            return next({
                statusCode: 409,
                message: `Category already exist with given name.`,
            });
        }

        const createCategoryResponse = await createCategory({ category })

        return res.status(200).send({
            success: true,
            msg: "Category Created",
            data: createCategoryResponse,
        });
    } catch (error) {
        return next(error);
    }
};