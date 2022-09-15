import React from "react";
import clsx from "clsx";
import switchStyles from "src/app/component/switch/Switch.module.scss";

export interface SwitchProps {
  isToggle: boolean;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CONTAINER_STYLES = clsx(switchStyles.container);
const INPUT_STYLES = clsx(switchStyles.container__input);
const SWITCH_STYLES = clsx(switchStyles.container__switch);

/**
 * Switch component
 */
export const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  return (
    <label className={CONTAINER_STYLES}>
      <input
        className={INPUT_STYLES} type="checkbox"
        checked={props.isToggle}
        onChange={props.onToggle}
      />
      <div className={SWITCH_STYLES} />
    </label>
  );
};
