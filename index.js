import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

import connection from "./Utils/Connection.js";
import credentials from "./Config/Credentials.js";
import corsOptions from "./Config/CorsOptions.js";

import seedRouter from "./Router/SeedRouter.js";
import userRouter from "./Router/UserRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
dotenv.config();
connection();

app.set('view engine', "ejs")

app.use(express.static('Public'))

app.get("/", (req,res) => {
  res.render('Login')
})
app.get("/portfolio", (req,res) => {
  res.render("portfolio")
})

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/seed", seedRouter);
app.use("/api/user", userRouter)

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
});
