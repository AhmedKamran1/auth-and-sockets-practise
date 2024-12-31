const router = require("express").Router();

// controller
const {
  forgotPassword,
  resendEmailConfirmation,
} = require("../controllers/mail");

// Routes
router.get("/forgot-password/:email", forgotPassword);
router.get("/resend-confirmation/:email", resendEmailConfirmation);

module.exports = router;
