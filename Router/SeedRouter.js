import User from "../Model/UserModel.js";
import user from '../data.js'
import { Router } from "express";

const seedRouter = Router()

seedRouter.get("/", async (req, res) => {
    await User.deleteMany({})
    const seedUser = await User.insertMany(user)
    res.json(seedUser)
})

export default seedRouter