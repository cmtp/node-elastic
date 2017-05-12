import express from "express";
import morgan from "morgan";
import consign from "consign";

const PORT = 3000;
const app = express();

app.set("json spaces", 4);
app.use(morgan('dev'));

consign()
.include("src/db.js")
.then("src/models")
.then("src/libs/middlewares.js")
.then("src/routes")
.then("src/libs/boot.js")
.into(app);
