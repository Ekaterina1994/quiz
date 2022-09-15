import React from "react";
import Link from "src/app/component/link/Link";
import Paragraph from "src/app/component/paragraph/Paragraph";
import Headline from "src/app/component/headline/Headline";
import {MAIN_PATH} from "src/app/logic/mainPage/MainPage";

/**
 * Error page
 */
const ErrorPage: React.FC = () => {
  const CONTAINER = "container";
  const ERROR_NUMBER = "404";
  const ERROR_TEXT = "Settings Page";

  return (
    <>
      <Link name="To menu" to={MAIN_PATH} />
      <section className={CONTAINER}>
        <Headline text={ERROR_NUMBER} />
        <Paragraph text={ERROR_TEXT} />
      </section>
    </>
  );
};

export default ErrorPage;
