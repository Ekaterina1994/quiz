import React from "react";
import {NavLink} from "react-router-dom";
import "materialize-css";

/**
 * Компонент Меню с навигацией
 */

export type Props = {
  pathHome: string,
  pathSettings: string
};

const List: React.FC<Props> = ({pathHome, pathSettings}: Props) => {
  return (
    <nav>
      <div className="nav-wrapper teal lighten-1">
        <ul className="left hide-on-med-and-down">
          <li>
            <NavLink to={pathHome}>Home</NavLink>
          </li>
          <li>
            <NavLink to={pathSettings}>Settings</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default List;