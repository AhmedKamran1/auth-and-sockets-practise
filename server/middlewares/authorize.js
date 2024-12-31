const { ForbiddenRequestError } = require("../utils/errors");

const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw ForbiddenRequestError(
        `Only ${roles} are authorized for this action!`
      );
    next();
  };
};

module.exports = { authorize };
