import React from "react";
import clsx from "clsx";
import styles from "./Switch.module.scss";

/**
 * Switch props
 */
export interface SwitchProps {
  /**
   * Flag shows switch position
   */
  isLeftPosition: boolean;

  /**
   * Callback trigger on change
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Switch component
 */
export const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const CONTAINER_STYLES = clsx(styles.container);
  const INPUT_STYLES = clsx(styles.container__input);
  const SWITCH_STYLES = clsx(styles.container__switch);

  return (
    <label className={CONTAINER_STYLES}>
      <input
        className={INPUT_STYLES}
        type="checkbox"
        checked={props.isLeftPosition}
        onChange={props.onChange}
      />
      <div className={SWITCH_STYLES} />
    </label>
  );
};
