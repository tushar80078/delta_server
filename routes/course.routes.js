const express = require("express");
const router = express.Router();

/* Controllers */
const courseController = require("../controllers/course.controller");

/* Middlewares */
const tokenValidation = require("../helper/middlewares/authMiddleware");
const validate = require("../helper/middlewares/validateMiddleware");

/* Schema */
const { course: { createCourseSchema, getCourseSchema, getCourseByID } } = require("../lib/validators");

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

router.post("/getCourses", tokenValidation, validate({ bodySchema: getCourseSchema }), courseController.getAllCourses);

router.get("/:courseId", tokenValidation, validate({ paramsSchema: getCourseByID }), courseController.getCourseById);


module.exports = router;
