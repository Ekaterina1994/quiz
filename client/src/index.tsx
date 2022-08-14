import React from "react";
import {createRoot, Root} from "react-dom/client";
import "./index.css";
import App from "./app/App";

// Корневая точка root рендерит компоненту App

const rootElement: HTMLElement | null = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root: Root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
