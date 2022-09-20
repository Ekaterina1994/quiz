import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/mainPage/MainPage.module.scss";
import {Link} from "src/app/component/link/Link";
import {Headline} from "src/app/component/headline/Headline";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";

/**
 * Error page
 */
export const ErrorPage: React.FC = () => {
  const CONTAINER_STYLES = clsx(styles.container);
  const ERROR_TEXT = "Error";

  return (
    <div>
      <Link value="To menu" to={MAIN_PAGE_PATH} />
      <div className={CONTAINER_STYLES}>
        <Headline text={ERROR_TEXT} />
      </div>
    </div>
  );
};