const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// /admin/add-product => GET
// To add products
router.get("/add-product", isAuth, adminController.getAddProduct);

// /admin/product => GET
// To show products in the Admin products page
router.get("/products", isAuth, adminController.getProducts);

// /admin/add-product => POST
// To show products on main page after adding products
router.post("/add-product", isAuth, adminController.postAddProduct);

// To edit products
router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

// TO update..edited product
router.post("/edit-product", isAuth, adminController.postEditProduct);

// To delete product
router.post("/delete-product", isAuth, adminController.postDeleteProduct);

exports.routes = router;
