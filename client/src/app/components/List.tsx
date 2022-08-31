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
  const wrapperClassName: string = clsx(styles.wrapper);
  const listClassName: string = clsx(styles.list);
  const itemClassName: string = clsx(styles.item);
  return (
    <nav>
      <div className={wrapperClassName}>
        <ul className={listClassName}>
          <li className={itemClassName}>
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
