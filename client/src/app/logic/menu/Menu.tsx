import React from "react";
import {NavLink} from "react-router-dom";
import "materialize-css";

/**
 * Компонент Меню с навигацией
 */
const Menu: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper teal lighten-1">
        <ul className="left hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
