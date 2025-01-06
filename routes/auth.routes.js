const express = require(`express`);
const router = express.Router();

const userController = require(`../controllers/user.controller`);
const tokenValidation = require(`../helper/middlewares/authMiddleware`);


// router.post(
//     "/register", tokenValidation,
//     userController.postCreateUserProfile,
// );
router.post("/login", userController.postUserLogin);
// router.post("/forgotPassword", userController.postForgotPassword);
// router.post("/resetPassword", userController.postResetPassword);

module.exports = router;
