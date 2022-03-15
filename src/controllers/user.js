const { MUser } = require("../models");

async function Create(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ err: "email or password invalid" });
    }

    const newUser = await MUser.create(req.body);

    if (!newUser) return res.status(404).json({ err: "user not created" });

    const basicToken = Buffer.from(`${email}:${password}`).toString("base64");

    req.headers.authorization = `Basic ${basicToken}`;

    return next();
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
}

module.exports = {
  Create,
};
