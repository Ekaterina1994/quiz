import React, {useState} from "react";
import Headline from "src/app/component/headline/Headline";
import Switch from "src/app/component/switch/Switch";

export const SETTINGS_PATH = "settings"; // Path to SettingsPage

const SettingsPage: React.FC = () => {
  const [isToggle, setIsToggle] = useState(false);
  const SETTINGS_PAGE = "Offline / Online";

  const handleChange = (): void => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <Headline headline={SETTINGS_PAGE} />
      <Switch isToggle={isToggle} onToggle={handleChange} />
    </>
  );
};

export default SettingsPage;
