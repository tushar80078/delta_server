const express = require(`express`);
const router = express.Router();

/* Controllers */
const categoryController = require(`../controllers/category.controller`);


/* Middlewares */
const tokenValidation = require(`../helper/middlewares/authMiddleware`);
const validate = require("../helper/middlewares/validateMiddleware");

/* Schema */
const { category } = require("../lib/validators")

/* Routes */
router.get("/", tokenValidation, categoryController.getAllCategories);
router.post("/", tokenValidation, validate({ bodySchema: category.createCategorySchema }), categoryController.postCreateCategory);
router.post("/getCategories", validate({ bodySchema: category.getCategoriesByPagination }), categoryController.getAllCategoriesWithPagination);

module.exports = router;
