import React from "react";
import {AnswerVariantModel} from "src/app/model/AnswerVariantModel";
import {AnswerWithRadio} from "./AnswerWithRadio";

/**
 * Answers props
 */
interface CheckAnswerProps {
  /**
   * Answer's variants list
   */
  answerVariants: AnswerVariantModel[];

  /**
   * Callback to set checked answer id
   */
  setCheckedAnswerId: React.Dispatch<React.SetStateAction<string | null>>;
}

/**
 * UI to check answer
 */
export const CheckAnswer: React.FC<CheckAnswerProps> = (props: CheckAnswerProps) => {
  return (
    <>
      {props
        .answerVariants
        .map((answerVariant: AnswerVariantModel) => {
          return (
            <AnswerWithRadio
              key={answerVariant.id}
              answerVariant={answerVariant}
              setCheckedAnswerId={props.setCheckedAnswerId}
            />
          );
        })
      }
    </>
  );
};
