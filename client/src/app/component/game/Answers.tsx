import React from "react";
import {Paragraph} from "src/app/component/paragraph/Paragraph";
import {AnswerVariantModel} from "src/app/model/AnswerVariantModel";

const renderAnswerElement = (
  answerVariant: AnswerVariantModel,
  setCheckedAnswerId: React.Dispatch<React.SetStateAction<string | null>>,
): React.ReactElement => {
  return (
    <label key={answerVariant.id}>
      <input
        type="radio"
        name="choice"
        value={answerVariant.id}
        onChange={() => {
          return setCheckedAnswerId(answerVariant.id); ;
        }}
      />
      <Paragraph text={answerVariant.answer} />
    </label>
  );
};

interface AnswersProps {
  /**
   * Answer's variants list
   */
  answerVariants: AnswerVariantModel[];

  /**
   * Callback to set checked answer id
   */
  setCheckedAnswerId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Answers: React.FC<AnswersProps> = (props: AnswersProps) => {
  return (
    <>
      {props
        .answerVariants
        .map((answerVariant: AnswerVariantModel) => {
          return renderAnswerElement(
            answerVariant,
            props.setCheckedAnswerId,
          );
        },
        )}
    </>
  );
};
