import React, {useState} from "react";
import {Link} from "src/app/component/link/Link";
import {Headline} from "src/app/component/headline/Headline";
import {Switch} from "src/app/component/switch/Switch";
import {MAIN_PATH} from "src/app/logic/mainPage/MainPage";

export const SETTINGS_PATH = "settings";
const SETTINGS_PAGE = "Offline / Online";

export const SettingsPage: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false);

  const changeConnection = (): void => {
    setIsOnline(!isOnline);
  };

  return (
    <div>
      <Link title="To menu" to={MAIN_PATH} />
      <Headline text={SETTINGS_PAGE} />
      <Switch isOnline={isOnline} hasConnection={changeConnection} />
    </div>
  );
};
