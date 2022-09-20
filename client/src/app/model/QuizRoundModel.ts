import {questionsRoundDTO} from "src/app/model/QuestionsRoundDTO";

/**
 * DTO of questions for each round
 */
export class QuizRoundModel {

  /**
   * Text of question
   */
  public question: string;

  /**
   * Array of answers
   */
  public choices: string[];

  /**
   * Text of right answer
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