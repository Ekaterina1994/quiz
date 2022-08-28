import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import HomePage from "./logic/home/HomePage";
import Layout from "./logic/layout/Layout";
import SettingsPage from "./logic/settings/SettingsPage";
import NotFoundPage from "./logic/error/NotFoundPage";

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
          <Route path="404"
            element={<NotFoundPage />}
          />
          <Route path="*"
            element={(
              <Navigate to="/404"
                replace
              />
            )}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
