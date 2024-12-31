// Models
const { Types } = require("mongoose");
const Room = require("../models/room");
const User = require("../models/user");

// Get all rooms
const getAllRooms = async (req, res) => {
  const rooms = await Room.find();
  res.send(rooms);
};

// Create a new message
const createRoom = async (req, res) => {
  const room = await Room.create(req.body);
  res.send(room);
};

// Member joining room
const joinRoom = async (req, res) => {
  const roomId = req.params.roomId;
  const userId = req.user.id;

  const user = await User.findById({ _id: new Types.ObjectId(userId) });
  user.set({ joinedRoom: new Types.ObjectId(roomId) });
  await user.save();

  res.send("Joined Room");
};

module.exports = {
  getAllRooms,
  createRoom,
  joinRoom,
};
