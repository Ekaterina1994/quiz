import React from "react";
import clsx from "clsx";
import styles from "src/app/component/headline/Headline.module.scss";

/**
 * Headline props
 */
interface HeadlineProps {
  /**
   * Text
   */
  text: string;
};

/**
 * Headline
 */
export const Headline: React.FC<HeadlineProps> = (props: HeadlineProps) => {
  const HEADLINE_STYLES = clsx(styles.headline);

  return (
    <h1 className={HEADLINE_STYLES}>{props.text}</h1>
  );
};