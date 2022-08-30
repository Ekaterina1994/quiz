import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

/**
 * компонент кнопки
 */
const Button: React.FC = () => {

  return (
    <div>
      <button
        className={clsx(styles.btn)}
        type="button"
      >
        Button
      </button>
    </div>
  );
};

export default Button;
