const express = require("express");
const router = express.Router();
const cors = require("cors");

// Controller
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

router.get("/", (req, res) => res.send("Backend Working"));
router.get("/profile", getProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
