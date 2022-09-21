import {AnswerVariantModel} from "src/app/model/AnswerVariantModel";
import {AnswerVariantDTO} from "src/app/model/AnswerVariantDTO";
import {RoundDTO} from "src/app/model/RoundDTO";

/**
 * Round business model
 */
export class RoundModel {

  /**
   * Id
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
   * Right answer id
   */
  public rightAnswerId: string;

  constructor(quizSeed: RoundDTO) {
    this.question = quizSeed.question;
    this.answerVariants = quizSeed.answerVariants.map(
      (variant: AnswerVariantDTO) => {return new AnswerVariantModel(variant);},
    );
    this.rightAnswerId = quizSeed.rightAnswerId;
    this.id = quizSeed.id;
  }

}