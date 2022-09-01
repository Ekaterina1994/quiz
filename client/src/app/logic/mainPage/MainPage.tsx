import React from "react";
import "materialize-css";
import {Outlet} from "react-router-dom";
import Menu from "src/app/logic/menu/Menu";

// Main page
const MainPage: React.FC = () => {
  return (
    <div className="container">
      <Menu />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainPage;