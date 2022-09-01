import React from "react";
import "materialize-css";
import List from "../../components/List";

const MAIN_PATH = "/";
const SETTINGS_PATH = "/settings";

// Header with links
const Menu: React.FC = () => {
  return (
    <div>
      <List pathMain={MAIN_PATH} pathSettings={SETTINGS_PATH} />
    </div>
  );
};

export default Menu;
