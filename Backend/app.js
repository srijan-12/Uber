const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const userRouter = require("./src/routes/user.route.js")
const express = require("express");
const cookieParser = require("cookie-parser")




const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors())
app.use("/user", userRouter)



module.exports = app;