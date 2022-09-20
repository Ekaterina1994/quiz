import React, {useState} from "react";
import {Link} from "src/app/component/link/Link";
import {Headline} from "src/app/component/headline/Headline";
import {Switch} from "src/app/component/switch/Switch";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";

/**
 * Settings page path
 */
export const SETTINGS_PAGE_PATH = "/settings";

const SETTINGS_TITLE = "Offline / Online";

/**
 * Data upload switching settings page
 */
export const SettingsPage: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false);

  const changeConnection = (): void => {
    setIsOnline(!isOnline);
  };

  return (
    <div>
      <Link value="To menu" to={MAIN_PAGE_PATH} />
      <Headline text={SETTINGS_TITLE} />
      <Switch isOnline={isOnline} hasConnection={changeConnection} />
    </div>
  );
};
