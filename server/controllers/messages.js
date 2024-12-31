// Models
const Message = require("../models/message");

// Get all messages by room Id
const getRoomMessages = async (req, res) => {
  const roomId = req.params.roomId;

  const messages = await Message.find({ room: roomId }).populate("sentBy");
  res.send(messages);
};

// Create a new message
const createMessage = async (req, res) => {
  const sentBy = req.user.id;
  const { content, room } = req.body;

  const payload = {
    sentBy,
    content,
    room,
  };

  const message = await Message.create(payload);
  await message.populate("sentBy");

  res.send(message);
};

module.exports = {
  getRoomMessages,
  createMessage,
};
