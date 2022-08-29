import React from "react";

/**
 * Компонента выводящая заголовок первого уровня
 */
export type Props = { text: string };

const Paragraph: React.FC<Props> = ({text}: Props) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Paragraph;