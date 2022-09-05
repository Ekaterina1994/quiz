import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/component/header/Header.module.scss";
import btnStyles from "src/app/component/button/Button.module.scss";

const MAIN_PATH = "/";

/**
 * Header with links
 */
const Header: React.FC = () => {
  const headerClassName = clsx(styles.header);
  const btnClassName = clsx(btnStyles.btn);

  return (
    <header className={headerClassName}>
      <NavLink className={btnClassName} to={MAIN_PATH}>Main</NavLink>
    </header>
  );
};

export default Header;
