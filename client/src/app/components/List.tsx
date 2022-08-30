import React from "react";
import {NavLink} from "react-router-dom";
import "materialize-css";
import clsx from "clsx";
import styles from "./List.module.scss";

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
      <div className={clsx(styles.wrapper)}>
        <ul className={clsx(styles.list)}>
          <li className={clsx(styles.item)}>
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