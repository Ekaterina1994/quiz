import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/component/button/Button.module.scss";

/**
 * Link props
 */
interface LinkProps {
  /**
   * Url addres
   */
  to: string;

  /**
   * Link value (text)
   */
  value: string;
}

const LINK_STYLES = clsx(styles.btn);

/**
 * Custom link
 */
export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  return (
    <NavLink className={LINK_STYLES} to={props.to}>{props.value}</NavLink>
  );
};
