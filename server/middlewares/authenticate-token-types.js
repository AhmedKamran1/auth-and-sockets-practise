const { BadRequestError } = require("../utils/errors");
const jwt = require("jsonwebtoken");

const authenticateTokenType = (TokenType) => {
  return (req, res, next) => {
    const token = req.query.token;

    if (!token) return res.status(401).send("Access denied. No token found.");

    const decoded = jwt.verify(token, process.env.jwtPrivateKey);

    if (decoded.tokenType !== TokenType)
      throw BadRequestError("Invalid Token Type");

    req.user = decoded;

    next();
  };
};

module.exports = { authenticateTokenType };
