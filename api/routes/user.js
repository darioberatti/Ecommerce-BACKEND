const express = require('express');
const jwt = require('jsonwebtoken');
const lista = []; // Lista negra para tokens invalidados

const app = express();


app.post('/users/logout',  (req, res) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  
  lista.push(token);

  res.json({ mensaje: 'Logout exitoso' });
});

module.exports=user;


