const express = require(`express`);
const router = express.Router();

/* Controllers */
const userController = require(`../controllers/user.controller`);


/* Middlewares */
const tokenValidation = require(`../helper/middlewares/authMiddleware`);
const validate = require("../helper/middlewares/validateMiddleware");

/* Schema */
const { auth } = require("../lib/validators");

/* Routes */
router.post("/login", validate({ bodySchema: auth.loginSchema }), userController.postUserLogin);

router.post("/signup", validate({ bodySchema: auth.signUpSchema }), userController.postUserSignup);


module.exports = router;
