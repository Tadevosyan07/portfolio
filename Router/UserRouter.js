import { Router } from "express";
import userController from "../Controller/UserController.js";
const { login } = userController

const userRouter = Router()

userRouter.post("login", login)

export default userRouter