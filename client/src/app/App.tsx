import React from "react";
import "materialize-css";
import {BrowserRouter as Router} from "react-router-dom";
import useRoutes from "../routes";

// Главный компонент, который отрисовывает элементы на странице в зависимости от роута (UseRoutes)

const App = () => {
  const routes = useRoutes();

  return (
    <Router>
      <div className="container">{routes}</div>
    </Router>
  );
};

export default App;
