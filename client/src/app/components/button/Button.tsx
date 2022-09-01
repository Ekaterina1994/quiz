import React from "react";
import clsx from "clsx";
import styles from "src/app/components/button/Button.module.scss";

// Button component
const Button: React.FC = () => {
  const btnClassName = clsx(styles.btn);

  return (
    <div>
      <button
        className={btnClassName}
        type="button"
      >
        Button
      </button>
    </div>
  );
};

export default Button;
