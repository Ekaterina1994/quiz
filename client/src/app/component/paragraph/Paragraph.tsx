import React from "react";
import clsx from "clsx";
import styles from "src/app/component/paragraph/Paragraph.module.scss";

/**
 * Paragraph props
 */
interface ParagraphProps {
  /**
   * Text
   */
  text: string;
};

/**
 * Paragraph
 */
export const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  const PARAGRAPH_STYLES = clsx(styles.paragraph);

  return (
    <p className={PARAGRAPH_STYLES}>
      {props.text}
    </p>
  );
};