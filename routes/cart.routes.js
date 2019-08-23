const express = require("express");
const cartRoutes = express.Router();
const cart = require("./cart-items");

cartRoutes.get("/cart-items", (req, res) => {
  res.send(cart);
});

cartRoutes.post("/cart-items", (req, res) => {
  console.log(req.body);
  // cart.push(req.body);
  // res.send(cart);
});

cartRoutes.put("/cart-items/:id", (req, res) => {
  console.log(req.body, req.params.id);
  // const index = cart.findIndex(item => item.id === req.params.id);
  // cart.splice(index, 1, req.body);
  // res.send(cart);
});

cartRoutes.delete("/cart-items/:id", (req, res) => {
  console.log(req.params.id);
  // const index = cart.findIndex(item => item.id === req.params.id);
  // cart.splice(index, 1);
  // res.send(cart);
});

module.exports = cartRoutes;
