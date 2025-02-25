const express = require("express");
const router = express.Router();

/* Controllers */
const checkoutController = require(`../controllers/checkout.controller`);

/* Routes */
router.post("/create-checkout-session", checkoutController.postCheckoutSession);
router.post("/webhook", checkoutController.postWebHookController);

module.exports = router;
