import React from "react";
import { NavLink } from "react-router-dom";

export const Button = () => {
  return (
    <div>
      <NavLink to="/result">
        <button className="waves-effect waves-light btn-large">Button</button>
      </NavLink>
    </div>
  );
};
