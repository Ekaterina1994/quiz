import React from "react";
import styles from "./Button.module.scss";

/**
 * компонент кнопки
 */
const Button: React.FC = () => {

  return (
    <div>
      <button
        className={styles.btn}
        type="button"
      >
        Button
      </button>
    </div>
  );
};

export default Button;
