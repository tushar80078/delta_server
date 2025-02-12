const express = require(`express`);
const router = express.Router();

/* Controllers */
const commonController = require(`../controllers/common.controller`);


/* Routes */
router.get("/top-category-courses", commonController.allCategoryAndCourses);


module.exports = router;
