import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/component/header/Header.module.scss";
import linkStyles from "src/app/component/button/Button.module.scss";

const Header: React.FC = () => {
  const MAIN_PATH = "/";
  const headerClassName = clsx(styles.header);
  const linkClassName = clsx(linkStyles.btn);

  return (
    <header className={headerClassName}>
      <NavLink className={linkClassName} to={MAIN_PATH}>Main</NavLink>
    </header>
  );
};

export default Header;
