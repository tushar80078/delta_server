const express = require("express");
const router = express.Router();

// ------------------- Import all routes from other routes file -------------------
const authRoutes = require("./auth.routes");
const courseRoutes = require("./course.routes");
const categoryRoutes = require("./category.routes");


// -------------------- Define Parent Routes ----------------------------------------

router.use("/auth", authRoutes);
router.use("/course", courseRoutes);
router.use("/category", categoryRoutes);


module.exports = router;
