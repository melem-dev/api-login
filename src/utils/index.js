const jwt = require("./jwt");

module.exports = {
  log: (msg) => {
    const hour = new Date().toLocaleString("pt-br").split(" ")[1];
    console.log(`[${hour}] ${msg}`);
  },
  jwt,
  hash: (size) => {
    const chars = "abcdefghijkmlnopqrstuvwxyz0123456789";
    let result = "";
    for (let x = 0; x < size; x++) {
      result += chars
        .charAt(Math.floor(Math.random().chars.length))
        .toUpperCase();
    }

    return result;
  },
};
