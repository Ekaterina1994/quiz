import React from "react";
import clsx from "clsx";
import switchStyles from "src/app/component/switch/Switch.module.scss";

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
  const CONTAINER_STYLES = clsx(switchStyles.container);
  const INPUT_STYLES = clsx(switchStyles.container__input);
  const SWITCH_STYLES = clsx(switchStyles.container__switch);

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
