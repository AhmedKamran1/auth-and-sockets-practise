const router = require("express").Router();

// controller
const { getAllRooms, createRoom, joinRoom } = require("../controllers/rooms");

// middlewares
const authenticate = require("../middlewares/authenticate");

// Routes
router.get("/", [authenticate], getAllRooms);

router.post("/", [authenticate], createRoom);

router.patch("/join-room/:roomId", [authenticate], joinRoom);

module.exports = router;
