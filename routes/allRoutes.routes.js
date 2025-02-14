const express = require("express");
const router = express.Router();

// ------------------- Import all routes from other routes file -------------------
const authRoutes = require("./auth.routes");
const courseRoutes = require("./course.routes");
const categoryRoutes = require("./category.routes");
const lessonRoutes = require("./lessons.routes")
const categoryAndCourses = require("./common.routes")
const studentRoutes = require("./student.routes")


// -------------------- Define Parent Routes ----------------------------------------

router.use("/auth", authRoutes);
router.use("/course", courseRoutes);
router.use("/category", categoryRoutes);
router.use("/lessons", lessonRoutes)
router.use("/common", categoryAndCourses)
router.use("/students", studentRoutes)



module.exports = router;
