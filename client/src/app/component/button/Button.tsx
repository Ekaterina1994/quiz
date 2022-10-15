import React from "react";
import styles from "./Button.module.scss";

/**
 * Button props
 */
export interface ButtonProps {
  /**
   * Text
   */
  text: string;

  /**
   * Callback triggered on click
   */
  onClick: () => any;
}

/**
 * Custom link in menu
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
  // TODO: remove eslint-disable-next-line
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
    <a role="button" onClick={props.onClick}>
      <li className={styles.li}>
        <span className={styles.trim} />
        {props.text}
      </li>
    </a>
  );
};