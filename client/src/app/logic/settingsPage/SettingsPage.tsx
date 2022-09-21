import React, {useState} from "react";
import {Link} from "src/app/component/link/Link";
import {Headline} from "src/app/component/headline/Headline";
import {Switch} from "src/app/component/switch/Switch";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";
import {Paragraph} from "src/app/component/paragraph/Paragraph";

/**
 * Path to settings page
 */
export const SETTINGS_PAGE_PATH = "/settings";

const SETTINGS_PAGE_TITLE = "Settings";
const CONNECTION_TYPE_LABEL = "Offline / Online";

/**
 * Settings page
 */
export const SettingsPage: React.FC = () => {
  const [isOnlineMode, setIsOnlineMode] = useState(false);

  const changeConnectionMode = (): void => {
    setIsOnlineMode(!isOnlineMode);
  };

  return (
    <div>
      <Link text="To menu" to={MAIN_PAGE_PATH} />
      <Headline text={SETTINGS_PAGE_TITLE} />
      <Switch
        isLeftPosition={isOnlineMode}
        onChange={changeConnectionMode}
      />
      <Paragraph text={CONNECTION_TYPE_LABEL} />
    </div>
  );
};
