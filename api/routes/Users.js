const express = require("express");
const { generateToken, validateToken } = require("../config/tokens");
const lista = [];

const usersRouter = express.Router();


usersRouter.post('/logout',validateToken, (req, res) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  lista.push(token);

  res.json({ mensaje: 'Logout exitoso' });
});

module.exports = usersRouter;
