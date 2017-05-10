import express from "express";
import morgan from "morgan";
import consign from "consign";

const PORT = 3000;
const app = express();

app.set("json spaces", 4);
app.use(morgan('dev'));

consign()
.include("src/db.js")
.then("src/boot.js")
.then("src/models")
.into(app);

app.listen(PORT, () => console.log(`API REST - PORT ${PORT}`));