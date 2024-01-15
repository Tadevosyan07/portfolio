import Portfolio from "../Model/PortfolioModel.js";
import User from "../Model/UserModel.js";
import user from '../data.js'
import { aboutMe } from "../data.js";
import { Router } from "express";

const seedRouter = Router()

seedRouter.get("/", async (req, res) => {
    await User.deleteMany({})
    const seedUser = await User.insertMany(user)
    res.json(seedUser)
})
seedRouter.get("/me", async (req,res) => {
    await Portfolio.deleteMany({})
    const seedPortfolio = await Portfolio.insertMany(aboutMe)
    res.json(seedPortfolio)
})


export default seedRouter