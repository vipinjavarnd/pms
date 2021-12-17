const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();

// For login
router.route("/login").post(userController.loginUser);

// For registration
router
  .route("/register")
  .post(userController.createNewUsers)
  .get(userController.getAllUsers);

module.exports = router;
