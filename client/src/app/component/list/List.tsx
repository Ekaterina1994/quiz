import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/components/list/List.module.scss";

interface PathName {
  pathMain: string;
}

/**
 * Navigation component to main Page
 */
const List: React.FC<PathName> = (props: PathName) => {
  const wrapperClassName = clsx(styles.wrapper);
  const listClassName = clsx(styles.list);
  const itemClassName = clsx(styles.item);

  return (
    <nav className={wrapperClassName}>
      <ul className={listClassName}>
        <li className={itemClassName}>
          <NavLink to={props.pathMain}>Main</NavLink>
        </li>
      </ul>
    </nav>

  );
};

export default List;
