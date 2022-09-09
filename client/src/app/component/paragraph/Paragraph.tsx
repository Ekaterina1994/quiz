import React from "react";
import clsx from "clsx";
import styles from "src/app/component/paragraph/Paragraph.module.scss";

export interface ParagraphProps {
  text: string;
};

/**
 * Paragraph component
 */
const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  const paragraphClassName = clsx(styles.paragraph);

  return (
    <p className={paragraphClassName}>{props.text}</p>
  );
};

export default Paragraph;