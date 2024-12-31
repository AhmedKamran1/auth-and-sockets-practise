const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("authorization")?.substring("Bearer ".length);

  if (!token) return res.status(401).send("Access denied. No token found.");

  const decoded = jwt.verify(token, process.env.jwtPrivateKey);
  req.user = decoded;

  next();
};

module.exports = authenticate;
