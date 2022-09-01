import React from "react";
import "materialize-css";
import useRoutes from "../../../routes";

// Main page
const MainPage: React.FC = () => {
  const routes: React.ReactElement<string, string> | null = useRoutes(false);

  return <div className="container">{routes}</div>;
};

export default MainPage;
