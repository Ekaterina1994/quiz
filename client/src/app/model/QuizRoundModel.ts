import {questionsRoundDTO} from "src/app/model/QuestionsRoundDTO";

/**
 * Model which describe types anout variables used in one round
 */
export class QuizRoundModel {

  public question: string;

  public choices: string[];

  public rightAnswer: string;

  public key: string;

  /**
	 * Create a new Quiz
	 */
  constructor(quizSeed: questionsRoundDTO) {
    this.question = quizSeed.question;
    this.choices = quizSeed.choices;
    this.rightAnswer = quizSeed.rightAnswer;
    this.key = quizSeed.key;
  }

}