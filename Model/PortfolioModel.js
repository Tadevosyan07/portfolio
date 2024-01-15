import mongoose, { mongo } from "mongoose";

const portfolioSchema = new mongoose.Schema({
    username: { type: String},
    imgURL: { type: String },
    description: { type: String }
},{timestamps: true})

const Portfolio = new mongoose.model("Portfolio", portfolioSchema)

export default Portfolio