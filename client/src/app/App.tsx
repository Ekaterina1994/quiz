import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import SettingsPage from "./pages/SettingsPage";

/**
 * Главный компонент отрисовывает элементы на странице в зависимости от Route
 */
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={<Layout />}
        >
          <Route index
            element={<HomePage />}
          />
          <Route path="settings"
            element={<SettingsPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
