const express = require("express");
const router = express.Router();

// ------------------- Import all routes from other routes file -------------------
const authRoutes = require("./auth.routes");


// -------------------- Define Parent Routes ----------------------------------------

router.use("/auth", authRoutes);


module.exports = router;
