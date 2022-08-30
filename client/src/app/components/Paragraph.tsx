import React from "react";
import styles from "./Paragraph.module.scss";

/**
 * Компонента выводящая обычный текст
 */
export type Props = { text: string };

const Paragraph: React.FC<Props> = ({text}: Props) => {
  return (
    <div>
      <p className={styles.paragraph}>{text}</p>
    </div>
  );
};

export default Paragraph;