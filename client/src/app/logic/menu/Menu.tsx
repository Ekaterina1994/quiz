import React from "react";
import List from "src/app/components/list/List";

const MAIN_PATH = "/";
const SETTINGS_PATH = "/settings";

/**
 * Header with links
 */
const Menu: React.FC = () => {
  return (
    <List pathMain={MAIN_PATH} pathSettings={SETTINGS_PATH} />
  );
};

export default Menu;
