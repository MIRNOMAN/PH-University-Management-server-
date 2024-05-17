import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/modules/student/student.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRoute);

const getAControllar = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};
app.get('/', getAControllar);

export default app;
