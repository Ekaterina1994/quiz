import React, {useState} from "react";
import {Headline} from "src/app/component/headline/Headline";
import {Switch} from "src/app/component/switch/Switch";
import {MAIN_PAGE_PATH} from "src/app/logic/mainPage/MainPage";
import {Paragraph} from "src/app/component/paragraph/Paragraph";
import {PageBorder} from "src/app/component/pageBorder/PageBorder";
import {useNavigate} from "react-router-dom";
import styles from "src/app/logic/settingsPage/SettingsPage.module.scss";
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
  const navigate = useNavigate();
  const [isOnlineMode, setIsOnlineMode] = useState(false);

  const changeConnectionMode = (): void => {
    setIsOnlineMode(!isOnlineMode);
  };

  return (
    <PageBorder backButton={{text: "To menu", onClick: () => {return navigate(MAIN_PAGE_PATH);}}}>
      <Headline text={SETTINGS_PAGE_TITLE} />
      <div className={styles.switchContainer}>
        <Switch
          isLeftPosition={isOnlineMode}
          onChange={changeConnectionMode}
        />
        <Paragraph text={CONNECTION_TYPE_LABEL} />
      </div>
    </PageBorder>
  );
};
