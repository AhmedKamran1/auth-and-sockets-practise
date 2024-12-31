const router = require("express").Router();

// controller
const {
  getAllUsers,
  registerUser,
  loginUser,
  verifyUser,
  updatePassword,
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

// Routes
router.get("/users", [authenticate], getAllUsers);
router.post("/register", validateRequest(signupSchema), registerUser);
router.get(
  "/verify",
  authenticateTokenType(TOKENTYPES.ACCOUNT_VERIFICATION),
  verifyUser
);
router.post("/login", validateRequest(loginSchema), loginUser);
router.patch(
  "/update-password",
  [
    authenticateTokenType(TOKENTYPES.RESET_PASSWORD),
    validateRequest(passwordSchema),
  ],
  updatePassword
);

module.exports = router;
