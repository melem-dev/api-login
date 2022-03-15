const { jwt } = require("../utils");

module.exports = (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ");

    if (!token) throw Error();

    const { status, data } = jwt.verify(token[1]);

    if (!status || !data) throw Error();

    req.user = data;

    next();
  } catch (error) {
    return res.status(404).json({ err: "permission denied" });
  }
};
