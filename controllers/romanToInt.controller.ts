import express from "express";
import romanToIntService from "../services/romanToInt.service";

export default class romanToIntController {
    public static romanToInt(req: express.Request, res: express.Response){
    const str = req.body?.str
    if (str === "O") {
        res.json({int: "0"})
        return
    }
    
    res.json(romanToIntService.romanToInt(str))
    }
    
}