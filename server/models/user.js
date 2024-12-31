const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { hashPassword } = require("../utils/password");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
    select: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  joinedRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
    next();
  }
});

userSchema.methods.generateAuthToken = function (expireTime) {
  const token = jwt.sign(
    { id: this._id, name: this.name, email: this.email, role: this.role },
    process.env.jwtPrivateKey,
    { expiresIn: expireTime || "3600m" }
  );
  return token;
};

module.exports = mongoose.model("User", userSchema);
