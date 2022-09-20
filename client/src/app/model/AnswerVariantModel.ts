import {AnswerVariantDTO} from "src/app/model/AnswerVariantDTO";

export class AnswerVariantModel {

  /**
     * Answer id
     */
  public id: string;

  /**
      * Answer text
      */
  public answer: string;

  constructor(answerVariantDto: AnswerVariantDTO) {
    this.id = answerVariantDto.id;
    this.answer = answerVariantDto.answer;
  }

}