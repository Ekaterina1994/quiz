import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

/**
 * Button Props
 */
export interface ButtonProps {
  /**
   * Text on button
   */
  text: string;

  /**
   * Callback triggered on click
   */
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  // storybook cant works with styles
  const BUTTON_STYLES = clsx(styles.btn);

  // const BUTTON_STYLES = "asd";
  return (
    <button
      className={BUTTON_STYLES}
      type="button"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
