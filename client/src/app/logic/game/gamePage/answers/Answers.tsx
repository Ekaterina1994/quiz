import React from "react";
import {AnswerVariantModel} from "src/app/model/AnswerVariantModel";
import clsx from "clsx";
import styles from "src/app/logic/game/gamePage/GamePage.module.scss";
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
  const ANSWERS_STYLES = clsx(styles.game__answers);

  return (
    <div className={ANSWERS_STYLES}>
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
    </div>
  );
};
