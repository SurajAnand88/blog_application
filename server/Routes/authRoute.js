const express = require("express");
const { register, login, loggedInUser } = require("../Controllers/auth");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/loggedinuser", loggedInUser);

module.exports = router;
