import mongoose from "mongoose";

interface FinancialRecord {
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
}

//Creating the schema
//schema defines the database structure such as tables
//The "FinancialRecord" passed to mongoose below is a typescript anotation that defines it's data type
const FinancialRecordSchema = new mongoose.Schema<FinancialRecord>({
    userId: { type: String, required: true }, //defines the data types for mongoDB. Notice the capital letters of the data types
    date: { type: Date, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    paymentMethod: { type: String, required: true } 
});

//Defining the schema and making a model out of it
const FinancialRecordModel = mongoose.model<FinancialRecord>(
    'FinancialRecord', //name of the model
    FinancialRecordSchema //name of the schema
);

export default FinancialRecordModel;
//FinancialRecordModel can be used to make changes to the database when making API request anywhere in the backend 