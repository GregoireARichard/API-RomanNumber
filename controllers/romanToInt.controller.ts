import express from "express";
import romanToIntService from "../services/romanToInt.service";

export default class romanToIntController {
    public static romanToInt(req: express.Request, res: express.Response){
    const str = req.body?.str
    res.json(romanToIntService.romanToInt(str))
    }
    
}