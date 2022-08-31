import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "./List.module.scss";

/**
 * Компонент Меню с навигацией
 */

interface PathName {
  pathMain: string;
  pathSettings: string;
}

const List: React.FC<PathName> = (props: PathName) => {
  return (
    <nav>
      <div className={clsx(styles.wrapper)}>
        <ul className={clsx(styles.list)}>
          <li className={clsx(styles.item)}>
            <NavLink to={props.pathMain}>Home</NavLink>
          </li>
          <li>
            <NavLink to={props.pathSettings}>Settings</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default List;
