const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

// To show login page
router.get("/login", authController.getLogin);

// To show signup page
router.get("/signup", authController.getSignup);

// To get logged In
router.post("/login", authController.postLogin);

// To get signup
router.post("/signup", authController.postSignup);

// To get logout
router.post("/logout", authController.postLogout);

// To get reset page
router.get("/reset", authController.getReset);

// To get reset
router.post("/reset", authController.postReset);

// This is for update password page
router.get("/reset/:token", authController.getNewPassword);

// This is for setting new password
router.post("/new-password", authController.postNewPassword);

module.exports = router;
