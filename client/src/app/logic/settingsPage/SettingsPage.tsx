import React, {useState} from "react";
import Link from "src/app/component/link/Link";
import Headline from "src/app/component/headline/Headline";
import Switch from "src/app/component/switch/Switch";
import {MAIN_PATH} from "src/app/logic/mainPage/MainPage";

export const SETTINGS_PATH = "settings"; // Path to SettingsPage

const SettingsPage: React.FC = () => {
  const [isToggle, setIsToggle] = useState(false);
  const SETTINGS_PAGE = "Offline / Online";

  const handleChange = (): void => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <Link name="To menu" to={MAIN_PATH} />
      <Headline text={SETTINGS_PAGE} />
      <Switch isToggle={isToggle} onToggle={handleChange} />
    </>
  );
};

export default SettingsPage;
