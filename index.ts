import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import romanToIntController from './controllers/romanToInt.controller';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();


const app: Express = express();
app.use(cors());
const port = process.env.PORT;
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/romanToInt', romanToIntController.romanToInt)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});