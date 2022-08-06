import React from "react";
import {NavLink} from "react-router-dom";

function Button() {
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
}

export default Button;
