import {questionsRoundDTO} from "../services/QuizServiceStub";

export class QuizRound {

  public question: string;

  public choices: string[];

  public rightAnswer: string;

  public key: string;

  // Create a new Quiz
  constructor(quizSeed: questionsRoundDTO) {
    this.question = quizSeed.question;
    this.choices = quizSeed.choices;
    this.rightAnswer = quizSeed.rightAnswer;
    this.key = quizSeed.key;
  }

}