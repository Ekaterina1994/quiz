import React from "react";
import clsx from "clsx";
import switchStyles from "src/app/component/switch/Switch.module.scss";

export interface SwitchProps {
  isToggle: boolean;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Switch component
 */
export const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const containerClassName = clsx(switchStyles.container);
  const inputClassName = clsx(switchStyles.container__input);
  const switchClassName = clsx(switchStyles.container__switch);

  return (
    <label className={containerClassName}>
      <input
        className={inputClassName} type="checkbox"
        checked={props.isToggle}
        onChange={props.onToggle}
      />
      <div className={switchClassName} />
    </label>
  );
};
