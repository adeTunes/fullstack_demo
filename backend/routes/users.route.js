const express = require("express");
const usersControllers = require("../controllers/users.controller")

const usersRouter = express.Router();


usersRouter.get("/", usersControllers.getAllUsers);

usersRouter.post("/register", usersControllers.regiterUser);

usersRouter.post("/signin", usersControllers.signinUser);

module.exports = usersRouter;
