import React from "react";
import clsx from "clsx";
import styles from "./Headline.module.scss";

/**
 * Компонента выводящая заголовок первого уровня
 */
export type HeadlineText = { headline: string };

const Headline: React.FC<HeadlineText> = (props: HeadlineText) => {
  const headlineClassName = clsx(styles.headline);

  return (
    <div>
      <h1 className={headlineClassName}>{props.headline}</h1>
    </div>
  );
};

export default Headline;