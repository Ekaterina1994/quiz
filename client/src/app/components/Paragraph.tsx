import React from "react";
import clsx from "clsx";
import styles from "./Paragraph.module.scss";

export type ParagraphText = { text: string };

// Paragraph component
const Paragraph: React.FC<ParagraphText> = (props: ParagraphText) => {
  const paragraphClassName = clsx(styles.paragraph);

  return (
    <div>
      <p className={paragraphClassName}>{props.text}</p>
    </div>
  );
};

export default Paragraph;