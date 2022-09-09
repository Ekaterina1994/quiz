/**
 * DTO of quiz round
 */
export interface questionsRoundDTO {

  /**
	 * Text of question
	 */
  question: string;

  /**
	 * Array of answers
	 */
  choices: string[];

  /**
	 * Text of qright answer
	 */
  rightAnswer: string;

  /**
	 * ID for each round
	 */
  key: string;
}