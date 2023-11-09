import express from "express";

export default class intToRomanController {
    public static intToRoman(req: express.Request, res: express.Response){
        let num = req.body?.num
        if (num <= 0 || num % 1 > 0 || num > 3999) throw new Error("Number must be positive or integer or below 3999");
        const values: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const symbols: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        let result: string = "";
        let i = 0;
      
        while (num > 0) {
          if (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
          } else {
            i++;
          }
        }
        res.json({roman_number: result})
    }
}