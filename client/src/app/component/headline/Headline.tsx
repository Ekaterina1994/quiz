import React from "react";
import clsx from "clsx";
import styles from "src/app/component/headline/Headline.module.scss";

/**
 * Contain attributes for each headline
 */
export type HeadlineText = { headline: string };

/**
 * Headline component
 */
const Headline: React.FC<HeadlineText> = (props: HeadlineText) => {
  const headlineClassName = clsx(styles.headline);

  return (
    <h1 className={headlineClassName}>{props.headline}</h1>
  );
};

export default Headline;