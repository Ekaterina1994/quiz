import {AnswerVariantDTO} from "./AnswerVariantDTO";

/**
 * Round DTO
 */
export interface RoundDTO {

  /**
   * ID
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
   * Right answer id
   */
  rightAnswerId: string;
}
