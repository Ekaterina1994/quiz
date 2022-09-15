import React from "react";
import clsx from "clsx";
import styles from "src/app/component/paragraph/Paragraph.module.scss";

/**
 * Contain attributes for each paragraph
 */
interface ParagraphProps {
  text: string;
};

export const PARAGRAPH_STYLES = clsx(styles.paragraph);

/**
 * Paragraph component
 */
export const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  return (
    <p className={PARAGRAPH_STYLES}>{props.text}</p>
  );
};