const express = require("express");
const categoriesRouter = express.Router();
const { Users, Products, Cart, Categories } = require("../models");
const { validateAdmin, validateUser } = require("../middleware/auth");

categoriesRouter.get("/:id", (req, res) => {
  Categories.findByPk(req.params.id)
    .then((category) => res.status(200).json(category))
    .catch((err) => console.log(err));
});

categoriesRouter.get("/", (req, res) => {
  Categories.findAll()
    .then((categories) => res.status(200).json(categories))
    .catch((err) => console.log(err));
});

categoriesRouter.post("/create", validateUser, validateAdmin, (req, res) => {
  Categories.create(req.body)
    .then((newCategory) => res.status(201).json(newCategory))
    .catch((err) => console.log(err));
});

categoriesRouter.delete("/:id", validateUser, validateAdmin, (req, res) => {
  const categoryId = req.params.id;
  Categories.destroy({ where: { id: categoryId } })
    .then(() => res.sendStatus(204))
    .catch((err) => console.log(err));
});

categoriesRouter.put("/:id", validateUser, validateAdmin, (req, res) => {
  Categories.findByPk(req.params.id)
    .then((category) => category.update(req.body, { returning: true }))
    .then((response) => res.send(response));
});

module.exports = categoriesRouter;
