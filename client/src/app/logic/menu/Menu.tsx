import React from "react";
import {NavLink} from "react-router-dom";
import "materialize-css";

/**
 * Компонент Меню с навигацией
 */
const Menu: React.FC = () => {
  const HOME_PATH: string = "/";
  const SETTINGS_PATH: string = "/settings";

  return (
    <nav>
      <div className="nav-wrapper teal lighten-1">
        <ul className="left hide-on-med-and-down">
          <li>
            <NavLink to={HOME_PATH}>Home</NavLink>
          </li>
          <li>
            <NavLink to={SETTINGS_PATH}>Settings</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
