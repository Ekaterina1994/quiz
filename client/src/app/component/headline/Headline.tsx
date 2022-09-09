import React from "react";
import clsx from "clsx";
import styles from "src/app/component/headline/Headline.module.scss";

/**
 * Contain attributes for each headline
 */
export interface HeadlineProps {
  text: string;
};

const Headline: React.FC<HeadlineProps> = (props: HeadlineProps) => {
  const headlineClassName = clsx(styles.headline);

  return (
    <h1 className={headlineClassName}>{props.text}</h1>
  );
};

export default Headline;