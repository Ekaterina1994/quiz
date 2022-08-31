import React from "react";
import clsx from "clsx";
import styles from "./Paragraph.module.scss";

/**
 * Компонента выводящая обычный текст
 */
export type ParagraphText = { text: string };

const Paragraph: React.FC<ParagraphText> = (props: ParagraphText) => {
  const paragraphClassName: string = clsx(styles.paragraph);
  return (
    <div>
      <p className={paragraphClassName}>{props.text}</p>
    </div>
  );
};

export default Paragraph;