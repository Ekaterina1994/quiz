import React from "react";
import clsx from "clsx";
import switchStyles from "src/app/component/switch/Switch.module.scss";

interface ISwitch {
  isToggle: boolean;
  onToggle: any;
}

/**
 * Switch component
 */
const Switch: React.FC<ISwitch> = (props: ISwitch) => {
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

export default Switch;
