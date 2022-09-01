export class Quiz {

  public question: string;

  public choices: string[];

  public rightAnswer: string;

  public key: string;

  // Create a new Quiz
  constructor(quizSeed: Partial<Quiz>) {
    this.question = quizSeed.question ?? "";
    this.choices = quizSeed.choices ?? [];
    this.rightAnswer = quizSeed.rightAnswer ?? "";
    this.key = quizSeed.key ?? "";
  }

}