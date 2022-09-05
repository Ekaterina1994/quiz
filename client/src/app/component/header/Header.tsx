import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/component/header/Header.module.scss";

const MAIN_PATH = "/";

/**
 * Header with links
 */
const Header: React.FC = () => {
  const headerClassName = clsx(styles.header);

  return (
    <header className={headerClassName}>
      <NavLink to={MAIN_PATH}>Main</NavLink>
    </header>
  );
};

export default Header;
