import api from "./api";

const service = "room";
const port = 5001;

export const getAllRooms = () => {
  return api.get(`http://localhost:${port}/api/${service}`);
};

export const createRoom = (payload) => {
  return api.post(`http://localhost:${port}/api/${service}`, payload);
};

export const joinRoom = (roomId) => {
  return api.patch(
    `http://localhost:${port}/api/${service}/join-room/${roomId}`
  );
};
