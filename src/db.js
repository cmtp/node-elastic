import mongoose from "mongoose";
import q from "q";

mongoose.Promise = q.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/elastic-dev');