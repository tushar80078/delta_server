const express=require("express")
const router=express.Router()

/* Controllers */

const lessonController=require("../controllers/Lessons.controller")


/* Middleware */
const tokenValidation=require("../helper/middlewares/authMiddleware")
const validate=require("../helper/middlewares/validateMiddleware")


/*Schema */

const{lesson}=require("../lib/validators")

/*Routes */

//get all lessons inside course
router.get("/",tokenValidation,lessonController.getAllLessons)
// create new lesson
router.post("/",tokenValidation,validate({bodySchema:lesson.createCourseLessonSchema}),lessonController.postCreateLesson)
// get lessons with pagination
router.post("/getLessons",validate({bodySchema:lesson.getCourseLessonsByPagination}),lessonController.getAllCourseLessonsByPagination)

router.get("/:lessonId",tokenValidation,validate({paramsSchema:lesson.getLessonByID}),lessonController.getLessonByID)

module.exports=router;