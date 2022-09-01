import React from "react";
import {Routes, Route} from "react-router-dom";
import Quiz from "./app/logic/Quiz";
import Result from "./app/logic/Result";

// Routes
const useRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default useRoutes;
