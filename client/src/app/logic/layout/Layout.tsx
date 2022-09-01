import React from "react";
import "materialize-css";
import {Outlet} from "react-router-dom";
import Menu from "../menu/Menu";

// Layout
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
