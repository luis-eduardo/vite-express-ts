import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from Express + Vite + Typescript 🚀</h1>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});