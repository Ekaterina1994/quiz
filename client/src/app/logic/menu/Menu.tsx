import React from "react";
import "materialize-css";
import List from "../../components/List";

/**
 * Компонент Меню с навигацией
 */
const Menu: React.FC = () => {
  const HOME_PATH: string = "/";
  const SETTINGS_PATH: string = "/settings";

  return (
    <List pathMain={HOME_PATH} pathSettings={SETTINGS_PATH} />
  );
};

export default Menu;
