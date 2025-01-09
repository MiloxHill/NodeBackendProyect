const express = require('express');

const userServices = require('../Services/user.service')

const routerUsers = express.Router();
const service = new userServices();

routerUsers.get('/users', (req, res) => {
  const users = service.find();
  res.json(users);
  // const { limit, offset } = req.query;
  // if (limit && offset) {
  //   res.json({
  //     limit,
  //     offset
  //   });
  // }else {
  //   res.send('No hay parametros');
  // }
});

routerUsers.get('/id', (req, res) => {
  const { id } = req.params;
  const users = service.findOne(id);
  res.json(users);
});

routerUsers.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

routerUsers.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.json(user);
});

routerUsers.delete('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.delete(id);
  res.json(user);
});

module.exports = routerUsers;


