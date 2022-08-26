import React from "react";
import "materialize-css";
import useRoutes from "../../routes";

/* Компонент страницы "Главная", где находится компонент с викториной */
const HomePage: React.FC = () => {
  const routes: React.ReactElement<string, string> | null = useRoutes(false);

  return <div className="container">{routes}</div>;
};

export default HomePage;
