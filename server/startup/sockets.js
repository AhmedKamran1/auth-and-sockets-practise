const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");

module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // Adjust this for production
      methods: ["GET", "POST"],
    },
  });

  let registeredUsers = new Map();
  let typingUsers = new Set();

  io.on("connection", (socket) => {
    let user;
    try {
      user = jwt.verify(
        socket.handshake.headers.authorization,
        process.env.jwtPrivateKey
      );
      registeredUsers.set(user.id, socket.id);
    } catch (ex) {
      socket.emit("error", "INVALID USER");
      socket.disconnect();
    }

    if (user) socket.broadcast.emit("newConnection", user.id);

    socket.emit("getUsers", Array.from(registeredUsers.keys()));

    socket.on("join-room", (roomId, name) => {
      socket.join(roomId);
      socket.broadcast.to(roomId).emit("recieve-join-room-message", name);
    });

    socket.on("leave-room", (roomId, name) => {
      socket.leave(roomId);
      socket.broadcast.to(roomId).emit("recieve-leave-room-message", name);
    });

    socket.on("typing", (roomId, name) => {
      if (!typingUsers.has(name)) {
        typingUsers.add(name);
      }
      socket.broadcast
        .to(roomId)
        .emit("recieve-typing", Array.from(typingUsers));
    });

    socket.on("stop-typing", (roomId) => {
      typingUsers = new Set();
      socket.broadcast
        .to(roomId)
        .emit("recieve-stop-typing", Array.from(typingUsers));
    });

    socket.on("chat-message", (roomId, payload) => {
      socket.broadcast.to(roomId).emit("recieve-chat-message", payload);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
      socket.broadcast.emit("disconnectedUser", user.name, user.id);
      registeredUsers.delete(user.id);
    });
  });
};
