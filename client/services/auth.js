import api from "./api";

const service = "auth";
const port = 5001;

export const login = (payload) => {
  return api.post(`http://localhost:${port}/api/${service}/login`, payload);
};

export const googleLogin = () => {
  return api.get(`http://localhost:${port}/api/${service}/login-google`);
};

export const signup = (payload) => {
  return api.post(`http://localhost:${port}/api/${service}/register`, payload);
};

export const verifyAccount = (token) => {
  return api.get(
    `http://localhost:${port}/api/${service}/verify?token=${token}`
  );
};

export const updatePassword = (token, payload) => {
  return api.patch(
    `http://localhost:${port}/api/${service}/update-password?token=${token}`,
    payload
  );
};
