const express = require("express");
const router = express.Router();

/* Controllers */
const courseController = require("../controllers/course.controller");

/* Middlewares */
const tokenValidation = require("../helper/middlewares/authMiddleware");
const validate = require("../helper/middlewares/validateMiddleware");

/* Schema */
const { createCourseSchema, getCourseSchema } = require("../lib/validators");

/* Multer Middleware for handling form data */
const multer = require('multer');
const upload = multer();

/* Routes */
router.post(
    "/",
    upload.single('thumbnailImage'),
    validate({ bodySchema: createCourseSchema }),
    tokenValidation,
    courseController.postCreateCourse
);

router.post("/getCourses", validate({ bodySchema: getCourseSchema }), courseController.getAllCourses);


module.exports = router;
