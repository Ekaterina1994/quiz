import React from "react";
import clsx from "clsx";
import styles from "src/app/component/button/Button.module.scss";

interface IButton {
  name: string;
  handleClick: any;
}

/**
 * Button component
 */
const Button: React.FC<IButton> = (props: IButton) => {
  const btnClassName = clsx(styles.btn);

  return (
    <div>
      <button
        className={btnClassName}
        type="button"
        onClick={props.handleClick}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
