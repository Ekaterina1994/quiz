import {AnswerVariantDTO} from "./AnswerVariantDTO";

/**
 * Round DTO
 */
export interface RoundDTO {

  /**
   * ID for each round
   */
  id: string;

  /**
   * Text of question
   */
  question: string;

  /**
   * Array of answers
   */
  answerVariants: AnswerVariantDTO[];

  /**
   * Text of qright answer
   */
  rightAnswerId: string;
}
