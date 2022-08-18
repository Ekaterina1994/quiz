import React from "react";
import {NavLink} from "react-router-dom";

/**
 * компонент кнопки
 */

const Button: React.FC = () => {
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
