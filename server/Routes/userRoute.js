const express = require("express");
const { getUser } = require("../Controllers/user");

const router = express.Router();

router.post("/getUser", getUser);

module.exports = router;
