import React from "react";
import clsx from "clsx";
import styles from "src/app/component/button/Button.module.scss";

/**
 * Contain attributes for each button
 */
interface ButtonProps {
  title: string;
  handleClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

const BUTTON_STYLES = clsx(styles.btn);

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={BUTTON_STYLES}
      type="button"
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};
