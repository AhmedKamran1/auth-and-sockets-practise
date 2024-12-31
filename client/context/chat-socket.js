import React, { createContext, useEffect } from "react";
import { io } from "socket.io-client";

let chatSocket;

const ChatSocketContext = createContext(chatSocket);

const ChatSocketProvider = ({ children }) => {
  chatSocket = io(process.env.NEXT_PUBLIC_API_SOCKET_BASE_URL, {
    extraHeaders: {
      Authorization: localStorage.getItem("token"),
    },
  });

  useEffect(() => {
    chatSocket.connect();
  }, []);

  return (
    <ChatSocketContext.Provider value={{ chatSocket }}>
      {children}
    </ChatSocketContext.Provider>
  );
};

export { ChatSocketContext, ChatSocketProvider };
