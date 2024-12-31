const router = require("express").Router();

// controller
const { getRoomMessages, createMessage } = require("../controllers/messages");

// middlewares
const authenticate = require("../middlewares/authenticate");

// Routes
router.get("/:roomId", [authenticate], getRoomMessages);

router.post("/", [authenticate], createMessage);

module.exports = router;
