import React from "react";
import styles from "./Headline.module.scss";

/**
 * Компонента выводящая заголовок первого уровня
 */
export type Props = { headline: string };

const Headline: React.FC<Props> = ({headline}: Props) => {
  return (
    <div>
      <h1 className={styles.headline}>{headline}</h1>
    </div>
  );
};

export default Headline;