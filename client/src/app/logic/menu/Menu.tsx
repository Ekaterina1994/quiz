import React from "react";
import List from "src/app/component/list/List";

const MAIN_PATH = "/";

/**
 * Header with links
 */
const Menu: React.FC = () => {
  return (
    <List pathMain={MAIN_PATH} />
  );
};

export default Menu;
