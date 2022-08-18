import React from "react";
import "materialize-css";
import {BrowserRouter as Router} from "react-router-dom";
import useRoutes from "../routes";

/**
 * Главный компонент отрисовывает элементы на странице в зависимости от роута (UseRoutes) */

const App: React.FC = () => {
  const routes: React.ReactElement<string, string> | null = useRoutes(false);

  return (
    <Router>
      <div className="container">{routes}</div>
    </Router>
  );
};

export default App;
