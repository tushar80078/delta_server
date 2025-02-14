const express = require("express")
const router = express.Router()

/* Controllers */

const lessonController = require("../controllers/lessons.controller")


/* Middleware */
const tokenValidation = require("../helper/middlewares/authMiddleware")
const validate = require("../helper/middlewares/validateMiddleware")


/*Schema */

const { lesson } = require("../lib/validators")

/*Routes */
router.post("/", tokenValidation, validate({ bodySchema: lesson.createCourseLessonSchema }), lessonController.postCreateLesson)

router.post("/getLessons", tokenValidation, validate({ bodySchema: lesson.getCourseLessonsByPagination }), lessonController.getAllCourseLessonsByPagination)

router.get("/:lessonId", tokenValidation, validate({ paramsSchema: lesson.getLessonByID }), lessonController.getLessonByID)

module.exports = router;