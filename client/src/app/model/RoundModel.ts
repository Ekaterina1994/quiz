import {AnswerVariantModel} from "src/app/model/AnswerVariantModel";
import {AnswerVariantDTO} from "src/app/model/AnswerVariantDTO";
import {RoundDTO} from "src/app/model/RoundDTO";

/**
 * DTO of questions for each round
 */
export class RoundModel {

  /**
   * ID for each round
   */
  public id: string;

  /**
   * Text of question
   */
  public question: string;

  /**
   * Array of answers
   */
  public answerVariants: AnswerVariantModel[];

  /**
   * Text of qright answer
   */
  public rightAnswerId: string;

  /**
   * Quiz round
   */
  constructor(quizSeed: RoundDTO) {
    this.question = quizSeed.question;
    this.answerVariants = quizSeed.answerVariants.map(
      (variant: AnswerVariantDTO) => {return new AnswerVariantModel(variant);},
    );
    this.rightAnswerId = quizSeed.rightAnswerId;
    this.id = quizSeed.id;
  }

}