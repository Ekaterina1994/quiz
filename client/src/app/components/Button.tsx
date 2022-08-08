import React from "react";
import {NavLink} from "react-router-dom";

// компонент кнопки

type buttonType = "button" | "submit";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: buttonType;
}

const Button: React.FC<IInputProps> = () => {
  return (
    <div>
      <NavLink to="/result">
        <button
          type="submit"
          className="waves-effect waves-light btn-large"
        >
          Button
        </button>
      </NavLink>
    </div>
  );
};

export default Button;
