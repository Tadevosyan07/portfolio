import { Router } from "express";
import userController from "../Controller/UserController.js";

const userRouter = Router()

userRouter.post("/login", userController.login)

export default userRouter