import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/component/button/Button.module.scss";

interface LinkProps {
  to: string;
  name: string;
}

const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const linkClassName = clsx(styles.btn);
  return (
    <NavLink className={linkClassName} to={props.to}>{props.name}</NavLink>
  );
};

export default Link;
