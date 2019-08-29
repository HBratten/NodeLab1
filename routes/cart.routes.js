const express = require("express");
const cartRoutes = express.Router();
const cart = require("./cart-items");
const pool = require("../connection/pg-connection-pool");

function selectAllShoppingCart(req, res) {
  pool.query("select * from shoppingcart order by id").then(result => {
    res.send(result.rows);
  });
}

cartRoutes.get("/shoppingcart", selectAllShoppingCart);

cartRoutes.post("/shoppingcart", (req, res) => {
  pool
    .query(
      "insert into shoppingcart(product, price, quantity) values ($1::text, $2::numeric, $3::int)",
      [req.body.product, req.body.price, req.body.quantity]
    )
    .then(() => {
      selectAllShoppingCart(req, res);
    });
});

cartRoutes.put("/shoppingcart/:id", (req, res) => {
  pool
    .query("update shoppingcart set quantity=$1::int where id=$2::int", [
      req.body.quantity,
      req.params.id
    ])
    .then(() => {
      selectAllShoppingCart(req, res);
    });
});

cartRoutes.delete("/shoppingcart/:id", (req, res) => {
  pool
    .query("delete from shoppingcart where id=$1::int", [req.params.id])
    .then(() => {
      selectAllShoppingCart(req, res);
    });
});

module.exports = cartRoutes;
