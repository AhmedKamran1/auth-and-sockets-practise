const JoiInstance = require("../joi-instance");

const signupSchema = JoiInstance.object({
  name: JoiInstance.string().required(),
  email: JoiInstance.string().email().required(),
  password: JoiInstance.string().required(),
});

const passwordSchema = JoiInstance.object({
  password: JoiInstance.string().required(),
});

const emailSchema = JoiInstance.object({
  email: JoiInstance.string().email().required(),
});

const loginSchema = JoiInstance.object()
  .concat(emailSchema)
  .concat(passwordSchema);

module.exports = {
  signupSchema,
  loginSchema,
  passwordSchema,
};
