import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/component/button/Button.module.scss";

/**
 * Link props
 */
interface LinkProps {
  /**
   * Url address
   */
  to: string;

  /**
   * Text
   */
  text: string;
}

/**
 * Custom link
 */
export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const LINK_STYLES = clsx(styles.btn);

  return (
    <NavLink className={LINK_STYLES} to={props.to}>
      {props.text}
    </NavLink>
  );
};
