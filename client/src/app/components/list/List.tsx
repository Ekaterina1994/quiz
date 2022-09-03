import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/components/list/List.module.scss";

interface PathName {
  pathMain: string;
  pathSettings: string;
}

/**
 * Navigation component to main Page
 */
const List: React.FC<PathName> = (props: PathName) => {
  const wrapperClassName = clsx(styles.wrapper);
  const listClassName = clsx(styles.list);
  const itemClassName = clsx(styles.item);

  return (
    <nav>
      <div className={wrapperClassName}>
        <ul className={listClassName}>
          <li className={itemClassName}>
            <NavLink to={props.pathMain}>Main</NavLink>
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
