import React from "react";
import {Routes, Route} from "react-router-dom";
import Quiz from "./app/logic/Quiz";
import Result from "./app/logic/Result";

/**
 * Роуты отслеживают url и при совпадении с указанным путем отрисовывают указанные элементы
 */
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
