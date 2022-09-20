import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/component/button/Button.module.scss";

/**
 * Contain attributes for each link
 */
interface LinkProps {
  to: string;
  title: string;
}

const LINK_STYLES = clsx(styles.btn);

/**
 * Custom link
 */
export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  return (
    <NavLink className={LINK_STYLES} to={props.to}>{props.title}</NavLink>
  );
};
