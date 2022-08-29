import React from "react";

/**
 * Компонента выводящая заголовок первого уровня
 */
export type Props = { headline: string };

const Headline: React.FC<Props> = ({headline}: Props) => {
  return (
    <div>
      <h1>{headline}</h1>
    </div>
  );
};

export default Headline;