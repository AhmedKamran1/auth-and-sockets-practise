import api from "./api";

const service = "message";
const port = 5001;

export const getRoomMessages = (roomId) => {
  return api.get(`http://localhost:${port}/api/${service}/${roomId}`);
};

export const createMessage = (payload) => {
  return api.post(`http://localhost:${port}/api/${service}`, payload);
};
