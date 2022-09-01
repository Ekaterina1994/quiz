import React from "react";
import "materialize-css";
import List from "../../components/List";

const MAIN_PATH = "/";
const SETTINGS_PATH = "/settings";

/**
 * Компонент Меню с навигацией
 */
const Menu: React.FC = () => {
  return (
    <List pathMain={MAIN_PATH} pathSettings={SETTINGS_PATH} />
  );
};

export default Menu;
