import React from "react";
import {Routes, Route} from "react-router-dom";
import Quiz from "./app/pages/Quiz";
import Result from "./app/pages/Result";

// Роуты отслеживают url и при совпадении с указанным путем отрисовывают указанные элементы

const useRoutes: React.FC = () => {
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
