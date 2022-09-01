import React from "react";
import Paragraph from "../../components/Paragraph";
import Headline from "../../components/Headline";

const CONTAINER = "container";
const ERROR_NUMBER = "404";
const ERROR_TEXT = "Settings Page";

// Error page
const NotFoundPage: React.FC = () => {
  return (
    <section className={CONTAINER}>
      <Headline headline={ERROR_NUMBER} />
      <Paragraph text={ERROR_TEXT} />
    </section>
  );
};

export default NotFoundPage;
