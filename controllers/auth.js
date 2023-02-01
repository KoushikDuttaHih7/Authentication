const user = require("../models/user");
const User = require("../models/user");

// This is for Login view
exports.getLogin = (req, res, next) => {
  const isLoggedIn = console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

// // This is for Signup view
exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    isAuthenticated: false,
  });
};

// This is for Login view
exports.postLogin = (req, res, next) => {
  User.findById("63d9f10468651c6b61dbf7a3")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect("/");
      });
    })
    .catch((err) => console.log(err));
};

// This is for Signup view
exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        return res.redirect("/signup");
      }
      const user = new User({
        email: email,
        password: password,
        cart: { items: [] },
      });
      return user.save();
    })
    .then((results) => {
      res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};
// User.findOne({ email: email })
// right email -> the email we are extracting
// left email -> the feild we are looking for in the database

// This is for Logout view
exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
