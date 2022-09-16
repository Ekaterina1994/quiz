import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/mainPage/MainPage.module.scss";
import {Link} from "src/app/component/link/Link";
import {Headline} from "src/app/component/headline/Headline";
import {MAIN_PATH} from "src/app/logic/mainPage/MainPage";

const CONTAINER_STYLES = clsx(styles.container);
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