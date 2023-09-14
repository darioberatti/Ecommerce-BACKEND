const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const generateToken = (payload) => {
  const token = jwt.sign({ payload }, SECRET, { expiresIn: "2d" });
  return token;
};

const validateToken = (token) => {
  const payload = jwt.verify(token, SECRET);

  return payload;
};

module.exports = { generateToken, validateToken };
