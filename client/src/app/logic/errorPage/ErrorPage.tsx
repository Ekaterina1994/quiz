import React from "react";
import {Link} from "src/app/component/link/Link";
import {Headline} from "src/app/component/headline/Headline";
import {MAIN_PATH} from "src/app/logic/mainPage/MainPage";

const CONTAINER_STYLES = "container";
const ERROR_TEXT = "Error 404";

export const ErrorPage: React.FC = () => {
  return (
    <div>
      <Link title="To menu" to={MAIN_PATH} />
      <div className={CONTAINER_STYLES}>
        <Headline text={ERROR_TEXT} />
      </div>
    </div>
  );
};