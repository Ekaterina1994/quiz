import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/mainPage/MainPage.module.scss";
import {Link} from "src/app/component/link/Link";
import {SETTINGS_PAGE_PATH} from "src/app/logic/settingsPage/SettingsPage";
import {GAME_PAGE_PATH} from "src/app/logic/gamePage/GamePage";

/**
 *  Main page path
 */
export const MAIN_PAGE_PATH = "/";

/**
 * Main page component
 */
export const MainPage: React.FC = () => {
  const MAIN_PAGE_STYLES = clsx(styles.main);

  return (
    <div className={MAIN_PAGE_STYLES}>
      <Link value="Start" to={GAME_PAGE_PATH} />
      <Link value="Settings" to={SETTINGS_PAGE_PATH} />
    </div>
  );
};
