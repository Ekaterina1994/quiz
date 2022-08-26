import React from "react";
import "materialize-css";
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";

/* Компонент макет страницы */
const Layout: React.FC = () => {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
