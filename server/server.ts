import express, {Express, Request, Response} from "express";
import fs from "fs";


// торможение выполнения процесса пока файл не будет прочитан
const quiz = JSON.parse(fs.readFileSync('./quiz.json', 'utf-8'));

const app: Express = express();

const PORT = 5000;

app.get("/api/quiz", (req: Request, res: Response): void => {
  res.json(quiz);
});

app.listen(PORT, (): void => {
  console.log(`Server started on PORT ${PORT}`);
});


