import React from "react";
import "materialize-css";
import List from "../../components/List";

/**
 * Компонент Меню с навигацией
 */
const Menu: React.FC = () => {
  const MAIN_PATH: string = "/";
  const SETTINGS_PATH: string = "/settings";

  return (
    <List pathMain={MAIN_PATH} pathSettings={SETTINGS_PATH} />
  );
};

export default Menu;
