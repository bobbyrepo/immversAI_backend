const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserControllers");

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);

module.exports = router;
