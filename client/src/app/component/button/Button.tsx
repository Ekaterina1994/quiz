import React from "react";
import clsx from "clsx";
import styles from "src/app/component/button/Button.module.scss";

/**
 * Contain attributes for each button
 */
export interface ButtonProps {
  name: string;
  handleClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const btnClassName = clsx(styles.btn);

  return (
    <button
      className={btnClassName}
      type="button"
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
};
