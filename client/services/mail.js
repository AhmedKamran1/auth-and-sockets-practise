import api from "./api";

const service = "mail";
const port = 5001;

export const forgotPassword = (email) => {
  return api.get(
    `http://localhost:${port}/api/${service}/forgot-password/${email}`
  );
};

export const resendConfirmation = (email) => {
  return api.get(
    `http://localhost:${port}/api/${service}/resend-confirmation/${email}`
  );
};
