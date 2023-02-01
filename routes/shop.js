const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// This is for index/main page products view
router.get("/", shopController.getIndex);

// This is for all products view
router.get("/products", shopController.getProducts);

// This is for single product view
router.get("/products/:productId", shopController.getProduct);

// This is for my cart view
router.get("/cart", isAuth, shopController.getCart);

// This is to add to my cart
router.post("/cart", isAuth, shopController.postCart);

// this is for deleting products from the cart
router.post("/cart-delete-item", isAuth, shopController.postCartDeleteProduct);

// This is for my order view
router.post("/create-order", isAuth, shopController.postOrder);

// This is for checkout view
router.get("/orders", isAuth, shopController.getOrders);

module.exports = router;
