const express = require(`express`);
const router = express.Router();

/* Controllers */
const userController = require(`../controllers/user.controller`);


/* Middlewares */
const tokenValidation = require(`../helper/middlewares/authMiddleware`);
const validate = require("../helper/middlewares/validateMiddleware");

/* Schema */
const { loginSchema } = require("../lib/validators");

/* Routes */
router.post("/login", validate({ bodySchema: loginSchema }), userController.postUserLogin);


module.exports = router;
