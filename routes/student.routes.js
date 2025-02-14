const express = require(`express`);
const router = express.Router();

/* Controllers */
const studentController = require(`../controllers/student.controller`);

/*Schema */
const { students } = require("../lib/validators");
const validate = require("../helper/middlewares/validateMiddleware");


/* Routes */

router.post("/cart/:userId", validate({ bodySchema: students.postAddCourseToCart }), studentController.addCourseToCart);

router.get("/cartCourses/:userId", studentController.getCartCoursesOfUser)

module.exports = router;
