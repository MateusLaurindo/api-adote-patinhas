import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
    .get("/user", UserController.listUsers)
    .get("/user/:id", UserController.listUserById)
    .post("/user", UserController.registerUser)
    .put("/user/:id", UserController.updateUser)
    .delete("/user/:id", UserController.removeUser)

export default router;