import express from "express";
import intToRomanService from "../services/intToRoman.service";

export default class intToRomanController {
    public static intToRoman(req: express.Request, res: express.Response){
        const num = req.body?.num
        res.json(intToRomanService.intToRoman(num))
    }
}