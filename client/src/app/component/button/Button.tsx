import React from "react";
import clsx from "clsx";
import styles from "src/app/component/button/Button.module.scss";

/**
 * Contain attributes for each button
 */
interface ButtonProps {
  /**
   * Text on button
   */
  text: string;

  /**
   * Callback triggered on click
   */
  handleClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const BUTTON_STYLES = clsx(styles.btn);

  return (
    <button
      className={BUTTON_STYLES}
      type="button"
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
};
