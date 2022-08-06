import React from "react";
import {Routes, Route} from "react-router-dom";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

const useRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<Quiz />}
    />
    <Route
      path="/result"
      element={<Result />}
    />
  </Routes>
);

export default useRoutes;