import React from "react";
import {NavLink} from "react-router-dom";
import styles from "src/app/component/link/Link.module.scss";

/**
 * Link props
 */
export interface LinkProps {
  /**
   * Text
   */
  text: string;

  /**
   * Destination path
   */
  to: string;
}

/**
 * Custom link component
 */
export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  return (
    <NavLink to={props.to ?? "/"} style={{display: "block"}}>
      <span className={styles.li}>
        <span className={styles.trim} />
        {props.text}
      </span>
    </NavLink>
  );
};
