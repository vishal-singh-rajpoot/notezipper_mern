const express = require("express");
const { registerUser } = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser);
// router.post("/api/users" , registerUser);

module.exports = router;
