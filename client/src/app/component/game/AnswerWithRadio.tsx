import React from "react";
import {Paragraph} from "src/app/component/paragraph/Paragraph";
import {AnswerVariantModel} from "src/app/model/AnswerVariantModel";

/**
 * Answer props
 */
interface AnswerWithRadioProps {
  /**
   * AnswerVariant for rendering
   */
  answerVariant: AnswerVariantModel;

  /**
   * Callback to check settled answer id
   */
  setCheckedAnswerId: React.Dispatch<React.SetStateAction<string | null>>;
}

/**
 * AnswerVariant visualisation
 */
export const AnswerWithRadio: React.FC<AnswerWithRadioProps> = (
  props: AnswerWithRadioProps,
): React.ReactElement => {
  return (
    <label key={props.answerVariant.id}>
      <input
        type="radio"
        name="choice"
        value={props.answerVariant.id}
        onChange={() => {
          return props.setCheckedAnswerId(props.answerVariant.id); ;
        }}
      />
      <Paragraph text={props.answerVariant.answer} />
    </label>
  );
};
