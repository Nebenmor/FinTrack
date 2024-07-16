import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI:string = "mongodb+srv://Engr_Anthony:mfzcbH6y11L1OlCh@fintrack.vdfmgrx.mongodb.net/";

mongoose.connect(mongoURI).then(() => console.log("Connected To MongoDB!")).catch((err) => console.error("Failed to Connect To MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})