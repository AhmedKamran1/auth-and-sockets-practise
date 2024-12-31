const router = require("express").Router();

// controller
const {
  getAllUsers,
  registerUser,
  loginUser,
  verifyUser,
  updatePassword,
  loginSocialUser,
} = require("../controllers/auth");

// middlewares
const { validateRequest } = require("../middlewares/validate-request");
const {
  authenticateTokenType,
} = require("../middlewares/authenticate-token-types");
const { authorize } = require("../middlewares/authorize");
const authenticate = require("../middlewares/authenticate");

// validation
const {
  signupSchema,
  loginSchema,
  passwordSchema,
} = require("../utils/validation-schema/auth");

// constants
const TOKENTYPES = require("../utils/constants/token-types");
const passport = require("passport");

// Routes
router.get("/users", [authenticate], getAllUsers);
router.post("/register", validateRequest(signupSchema), registerUser);
router.get(
  "/verify",
  authenticateTokenType(TOKENTYPES.ACCOUNT_VERIFICATION),
  verifyUser
);
router.post("/login", validateRequest(loginSchema), loginUser);

router.get(
  "/login-google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

router.get(
  "/google/callback",
  (req, res, next) => {
    passport.authenticate(
      "google",
      { session: false },
      async (err, user, info) => {
        if (err || !user) {
          return res.redirect("/api/auth/login/failure");
        }

        // Attach user profile to the request object
        req.user = user;
        next();
      }
    )(req, res, next);
  },
  loginSocialUser // Calls the controller after attaching the user profile
);
router.patch(
  "/update-password",
  [
    authenticateTokenType(TOKENTYPES.RESET_PASSWORD),
    validateRequest(passwordSchema),
  ],
  updatePassword
);

module.exports = router;
