import React from "react";
import {Routes, Route} from "react-router-dom";
import Quiz from "./app/pages/Quiz";
import Result from "./app/pages/Result";

const useRoutes = () => {
  return (
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
};

export default useRoutes;
