const bcrypt = require("bcrypt");
const { MUser } = require("../models");
const { jwt, hash } = require("../utils");

async function Login(req, res) {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(400).json({ err: "token not found" });

    const [username, password] = Buffer.from(token.split(" ")[1], "base64")
      .toString("ascii")
      .split(":");

    const user = await MUser.findOne({
      $or: [{ username }, { email: username }],
    });

    if (!user) return res.status(404).json({ err: "user not found" });

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) return res.status(404).json({ err: "password invalid" });

    const payload = {
      user: user.id,
      auth: true,
    };

    const authToken = jwt.encode(payload);

    return res.status(200).json({ auth: authToken.data });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
}

async function Validate(req, res) {
  return res.status(200).send();
}

async function GetRecovery(req, res) {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(404).json({ err: "email not found" });

    const email = Buffer.from(token.split(" ")[1], "base64").toString("ascii");
    if (!email) return res.status(404).json({ err: "email not found" });

    const user = await MUser.findOne({ email });
    if (!user) return res.status(404).json({ err: "user not found" });

    const recoveryToken = hash(12);
    await MUser.findByIdAndUpdate(user.id, { token: recoveryToken });
    return res.status(200).json({ hash: recoveryToken });
  } catch (error) {
    return res.status(500).json({ err: "Internal Server errror" });
  }
}

async function SetRecovery(req, res) {
  try {
    const { email, hash, password } = req.body;

    const user = await MUser.findOne({ email });
    if (!user) return res.status(404).json({ err: "user not found" });

    const isMatch = user.token === hash;
    if (!isMatch) return res.status(404).json({ err: "token invalid" });

    await MUser.findByIdAndUpdate(user.id, { password });
    return res.status(200).send();
  } catch (error) {}
}

module.exports = {
  Login,
  Validate,
  GetRecovery,
  SetRecovery,
};
