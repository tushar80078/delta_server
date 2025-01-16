const express = require(`express`);
const router = express.Router();

/* Controllers */
const categoryController = require(`../controllers/category.controller`);


/* Middlewares */
const tokenValidation = require(`../helper/middlewares/authMiddleware`);
const validate = require("../helper/middlewares/validateMiddleware");

/* Schema */

/* Routes */
router.get("/", tokenValidation, categoryController.getAllCategories);


module.exports = router;
