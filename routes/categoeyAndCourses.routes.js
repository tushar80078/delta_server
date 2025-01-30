const express = require(`express`);
const router = express.Router();

/* Controllers */
const categoryAndCourses = require(`../controllers/categoryAndCourses.controller`);




/* Routes */
router.get("/all", categoryAndCourses.allCategoryAndCourses);



module.exports = router;
