import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/mainPage/MainPage.module.scss";
import {Link} from "src/app/component/link/Link";
import {SETTINGS_PAGE_PATH} from "src/app/logic/settingsPage/SettingsPage";
import {GAME_PAGE_PATH} from "src/app/logic/gamePage/GamePage";

/**
 *  Path to Main page
 */
export const MAIN_PAGE_PATH = "/";

/**
 * Main page
 */
export const MainPage: React.FC = () => {
  const MAIN_PAGE_STYLES = clsx(styles.main);

  return (
    <div className={MAIN_PAGE_STYLES}>
      <Link text="Start" to={GAME_PAGE_PATH} />
      <Link text="Settings" to={SETTINGS_PAGE_PATH} />
    </div>
  );
};
