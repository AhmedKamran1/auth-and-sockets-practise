import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ChatSocketContext } from "@/context/chat-socket";
import {
  createMessage,
  createRoom,
  getAllRooms,
  getRoomMessages,
  joinRoom,
} from "@/services";
import { useRouter } from "next/router";
import { selectUserState, userActions } from "@/store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import { InputField } from "@/components/UI";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Chat = () => {
  const { chatSocket } = useContext(ChatSocketContext);
  const user = useSelector(selectUserState);
  const router = useRouter();
  const dispatch = useDispatch();

  const [userJoinMessage, setUserJoinMessage] = useState("");

  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [joinedRoom, setJoinedRoom] = useState(null);

  const [newMessage, setNewMessage] = useState("");
  const [roomName, setRoomName] = useState("");

  const [onlineUsers, setOnlineUsers] = useState([]);

  const [typingUsers, setTypingUsers] = useState([]);

  useEffect(() => {
    if (!user.id) {
      router.push("/login");
      return;
    } else {
      setJoinedRoom(user.joinedRoom);
    }
  }, [user.id]);

  const fetchAllMessages = async () => {
    try {
      const response = await getRoomMessages(joinedRoom);
      chatSocket.emit("join-room", joinedRoom, user.name);
      setMessages(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchAllRooms = async () => {
    try {
      const response = await getAllRooms();
      setRooms(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const createRoomHandler = async () => {
    try {
      const response = await createRoom({ name: roomName });
      setRooms((prevState) => [...prevState, response.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const joinRoomHandler = async (roomId) => {
    try {
      await joinRoom(roomId);
      dispatch(userActions.updateDetails({ joinedRoom: roomId }));
      chatSocket.emit("leave-room", joinedRoom, user.name);
      chatSocket.emit("join-room", roomId, user.name);
      setJoinedRoom(roomId);
    } catch (e) {
      console.log(e);
    }
  };

  const addMessage = async () => {
    try {
      const response = await createMessage({
        content: newMessage,
        room: joinedRoom,
      });
      chatSocket.emit("chat-message", joinedRoom, response.data);
      chatSocket.emit("stop-typing", joinedRoom);
      setMessages((prevState) => [...prevState, response.data]);
    } catch (e) {
      console.log(e);
    } finally {
      setNewMessage("");
    }
  };

  const logoutHandler = () => {
    dispatch(userActions.logout());
    localStorage.clear();
    chatSocket.close();
    router.push("/login");
  };

  const messageTypingHandler = (event) => {
    setNewMessage(event.target.value);
    chatSocket.emit("typing", joinedRoom, user.name);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      chatSocket.emit("stop-typing", joinedRoom);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [newMessage]);

  useEffect(() => {
    if (chatSocket) {
      chatSocket.on("getUsers", (data) => {
        setOnlineUsers(data.map((userId) => userId));
      });
      chatSocket.on("recieve-typing", (payload) => {
        const typingList = payload.filter((member) => member !== user.name);
        setTypingUsers(typingList);
      });
      chatSocket.on("recieve-stop-typing", (payload) => {
        setTypingUsers(payload);
      });
      chatSocket.on("recieve-chat-message", (payload) => {
        setMessages((prevState) => [...prevState, payload]);
      });
      chatSocket.on("recieve-join-room-message", (payload) => {
        setUserJoinMessage(`${payload} has joined`);
      });
      chatSocket.on("recieve-leave-room-message", (payload) => {
        setUserJoinMessage(`${payload} has left`);
      });
      chatSocket.on("newConnection", (userId) => {
        if (userId) {
          setOnlineUsers((prevState) => {
            if (!prevState.includes(userId)) {
              return [...prevState, userId];
            }
            return prevState;
          });
        }
      });
      chatSocket.on("disconnectedUser", (username, userId) => {
        setOnlineUsers((prevState) => {
          const updatedOnlineUsers = prevState.filter(
            (member) => member !== userId
          );

          return updatedOnlineUsers;
        });
        setUserJoinMessage(`${username} has left`);
      });
    }
  }, [chatSocket]);

  useEffect(() => {
    if (joinedRoom) fetchAllMessages();
  }, [joinedRoom]);

  useEffect(() => {
    fetchAllRooms();
  }, []);

  return (
    <div>
      <h2>Logged in as {user.name}</h2>
      <Box display="flex" gap={2}>
        {rooms.map((room) => (
          <Box sx={{ border: "1px solid black", p: 5, maxWidth: "250px" }}>
            <Typography>Room Name: {room.name}</Typography>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              disabled={joinedRoom === room._id}
              onClick={() => joinRoomHandler(room._id)}
            >
              {joinedRoom === room._id ? "Joined" : "Join"}
            </Button>
          </Box>
        ))}
      </Box>
      <Box sx={{ border: "1px solid black", p: 5, maxWidth: "250px" }}>
        <InputField
          label="Room Name"
          variant="outlined"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          disabled={roomName === ""}
          onClick={createRoomHandler}
        >
          Create Room
        </Button>
      </Box>
      <button onClick={logoutHandler}>logout</button>
      {joinedRoom ? (
        <Box>
          <div
            id="message-container"
            style={{
              height: "70vh",
              width: "50vw",
              margin: "auto",
              border: "1px solid black",
              overflow: "auto",
              padding: "20px",
            }}
          >
            <Typography variant="h5">{userJoinMessage}</Typography>
            {messages.map((message) => (
              <div key={message._id}>
                {message.sentBy._id === user.id ? (
                  <div style={{ textAlign: "right", fontWeight: "bold" }}>
                    <span>{message.content} :You</span>
                  </div>
                ) : (
                  <Box display="flex" gap={1} alignItems="center">
                    <Box
                      sx={{
                        backgroundColor: onlineUsers.includes(
                          message.sentBy._id
                        )
                          ? "green"
                          : "gray",
                        borderRadius: "50%",
                        height: "10px",
                        width: "10px",
                      }}
                    />
                    <span>
                      {message.sentBy.name}: {message.content}
                    </span>
                  </Box>
                )}
              </div>
            ))}
            {typingUsers.length > 0 && (
              <Typography variant="body2">
                {typingUsers.join(",")} are typing
              </Typography>
            )}
          </div>
          <div
            id="send-container"
            style={{
              width: "50vw",
              margin: "auto",
            }}
          >
            <input
              type="text"
              id="message-input"
              style={{ width: "90%", height: "30px", marginBottom: "100px" }}
              onChange={(e) => messageTypingHandler(e)}
              value={newMessage}
            />
            <button
              id="send-button"
              style={{ width: "10%", height: "30px" }}
              onClick={addMessage}
            >
              Send
            </button>
          </div>
        </Box>
      ) : (
        <h1>Join a room to start chatting</h1>
      )}
    </div>
  );
};

export default Chat;
