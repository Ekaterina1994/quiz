import React from "react";
import { NavLink } from "react-router-dom";

export const Button = () => {
  return (
    <div>
      <NavLink to="/result">
        <a class="waves-effect waves-light btn-large">Button</a>
      </NavLink>
    </div>
  );
};
