const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY || "Secret_key";

function encode(payload) {
  try {
    const token = jwt.sign(payload, secret_key, { expiresIn: "24h" });

    return { status: true, data: token };
  } catch (error) {
    return { status: false, error: error.message };
  }
}

function decode(token) {
  try {
    const verify = jwt.decode(token);

    if (!verify) throw Error("data not found");

    return { status: true, data: verify };
  } catch (error) {
    return { status: false, error: error.message };
  }
}

function verify(token = false) {
  try {
    if (!token) throw Error("token invalid 1");

    const checkSize = token.split(".");

    if (checkSize.length !== 3) throw Error("token invalid 2");

    const data = jwt.verify(token, secret_key, (err, data) => {
      if (err) throw Error(err);

      return data;
    });

    if (!data) throw Error("token invalid 3");

    return { status: true, data };
  } catch (error) {
    return { status: false, error: error.message };
  }
}

module.exports = { encode, decode, verify };
