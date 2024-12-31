const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const validatePassword = async (enteredPassword, comparedPassword) => {
  const isValid = await bcrypt.compare(enteredPassword, comparedPassword);
  return isValid;
};

module.exports = { hashPassword, validatePassword };
