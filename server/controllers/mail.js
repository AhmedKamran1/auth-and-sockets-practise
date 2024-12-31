const jwt = require("jsonwebtoken");

// Models
const User = require("../models/user");

// Utils
const { BadRequestError, NotFoundError } = require("../utils/errors");
const { sendMail } = require("../utils/mailer");
const TOKENTYPES = require("../utils/constants/token-types");

// Resend Email verification link
const resendEmailConfirmation = async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({ email: email });
  if (!user) throw NotFoundError("User does not exist");
  if (user.isVerified) throw BadRequestError("User is already verified!");

  const token = jwt.sign(
    { email: email, tokenType: TOKENTYPES.ACCOUNT_VERIFICATION },
    process.env.jwtPrivateKey,
    {
      expiresIn: "30m",
    }
  );

  await sendMail(
    user.name,
    user.email,
    "Verify your account",
    `http://localhost:3000/verification?token=${token}`
  );
  res.status(201).send({ message: "Verification link sent at email." });
};

// forgot password reset link
const forgotPassword = async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({ email: email });
  if (!user) throw NotFoundError("User does not exist");

  const token = jwt.sign(
    { email: email, tokenType: TOKENTYPES.RESET_PASSWORD },
    process.env.jwtPrivateKey,
    {
      expiresIn: "5m",
    }
  );

  await sendMail(
    user.name,
    user.email,
    "Update your password",
    `http://localhost:3000/reset-password?token=${token}`
  );
  res.status(201).send({ message: "reset link sent at email!" });
};

module.exports = {
  forgotPassword,
  resendEmailConfirmation,
};
