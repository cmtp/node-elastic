import express from "express";
import morgan from "morgan";

const PORT = 3000;
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => res.json({status: "Start API REST "}));
app.listen(PORT, () => console.log(`API REST - PORT ${PORT}`));