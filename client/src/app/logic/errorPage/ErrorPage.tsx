import React from "react";
import Paragraph from "src/app/component/paragraph/Paragraph";
import Headline from "src/app/component/headline/Headline";

const ErrorPage: React.FC = () => {
  const CONTAINER = "container";
  const ERROR_NUMBER = "404";
  const ERROR_TEXT = "Settings Page";

  return (
    <section className={CONTAINER}>
      <Headline headline={ERROR_NUMBER} />
      <Paragraph text={ERROR_TEXT} />
    </section>
  );
};

export default ErrorPage;
