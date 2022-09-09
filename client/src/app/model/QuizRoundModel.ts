import {questionsRoundDTO} from "src/app/model/QuestionsDTO";

/**
 * DTO of questions for each round
 */
export class QuizRound {

  /**
	 * Text of question
	 */
  public question: string;

  /**
	 * Array of answers
	 */
  public choices: string[];

  /**
	 * Text of qright answer
	 */
  public rightAnswer: string;

  /**
	 * ID for each round
	 */
  public key: string;

  /**
	 * Quiz round
	 */
  constructor(quizSeed: questionsRoundDTO) {
    this.question = quizSeed.question;
    this.choices = quizSeed.choices;
    this.rightAnswer = quizSeed.rightAnswer;
    this.key = quizSeed.key;
  }

}