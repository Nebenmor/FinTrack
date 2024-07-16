import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const router = express.Router();

//GET request
router.get("/getAllByUserID/:userid", async(req: Request, res: Response) => {
    try {
        const userId = req.params.userid;
        const records = await FinancialRecordModel.find({userId: userId})
        if (records.length === 0) {
            return res.status(404).send("No recods found for the user.")
        }
        res.status(200).send(records);
    } catch (err) {
        res.status(500).send(err);
    }
});

//POST request
router.post("/", async(req: Request, res: Response) => {
    try {
        const newRecordBody = req.body; 
        const newRecord = new FinancialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();

        res.status(200).send(savedRecord);
    } catch (err) {
        res.status(500).send(err);
    }
});

//put request for updating
router.put("/:id", async(req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const newRecordBody = req.body; 
        const record = await FinancialRecordModel.findByIdAndUpdate(id, newRecordBody, { new:true });

        if (!record) return res.status(404).send();

        res.status(200).send(record);
    } catch (err) {
        res.status(500).send(err);
    }
});

//DELETE request
//put request for updating
router.delete("/:id", async(req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const record = await FinancialRecordModel.findByIdAndDelete(id);

        if (!record) return res.status(404).send();
        res.status(200).send(record);
    } catch (err) {
        res.status(500).send(err);
    }
});

export default router;