import express, {Express} from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import postRoute from './routes/PostRoute'
import ErrorHandle from "./middleware/ErrorHandle";

dotenv.config();
const app: Express = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//db
mongoose.set("strictQuery", true)
mongoose
    .connect(process.env.MONGODB || "")
    .then(() => console.log(`MongoDB Connected!`))
    .catch((error) => console.log(`Couldn't connect to MongoDB!`, error));

//route api
app.use('/api/posts', postRoute)

//middleware errorhandler
app.use(ErrorHandle)

app.listen(PORT, () => console.log(`Server running on port${PORT}`));
