// Название проекта на клиенте

export class Question {

  // Название вопроса

  public question: string;

  // Варианты ответов (массив строк)

  public choices: Array<string>;

  // Правильный вариант ответа

  public rightAnswer: string;

  constructor(question: Partial<Question>) {
    this.question = question.question ?? "";
    this.choices = question.choices ?? [""];
    this.rightAnswer = question.rightAnswer ?? "";
  }

}