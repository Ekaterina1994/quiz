import React from "react";
import clsx from "clsx";
import styles from "src/app/component/headline/Headline.module.scss";

/**
 * Contain attributes for each headline
 */
interface HeadlineProps {
  text: string;
};

/**
 * Insert headline on pages
 */
const HEADLINE_STYLES = clsx(styles.headline);

export const Headline: React.FC<HeadlineProps> = (props: HeadlineProps) => {
  return (
    <h1 className={HEADLINE_STYLES}>{props.text}</h1>
  );
};