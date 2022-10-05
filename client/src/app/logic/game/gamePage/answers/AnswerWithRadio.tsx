import React from "react";
import clsx from "clsx";
import {AnswerVariantModel} from "src/app/model/AnswerVariantModel";
import {Paragraph} from "../../../../component/paragraph/Paragraph";
import styles from "../GamePage.module.scss";

/**
 * Answer props
 */
export interface AnswerWithRadioProps {
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
  const GAME_BUTTON_STYLES = clsx(styles.game__button);
  const GAME_ANSWER_STYLES = clsx(styles.game__answer);

  return (
    <div key={props.answerVariant.id}>
      <input
        className={GAME_BUTTON_STYLES}
        id={props.answerVariant.id}
        type="radio"
        name="choice"
        value={props.answerVariant.id}
        onChange={() => {
          return props.setCheckedAnswerId(props.answerVariant.id);
        }}
      />
      <label className={GAME_ANSWER_STYLES} htmlFor={props.answerVariant.id}>
        <Paragraph text={props.answerVariant.answer} />
      </label>
    </div>
  );
};
