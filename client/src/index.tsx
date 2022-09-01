import React from "react";
import {createRoot, Root} from "react-dom/client";
import "src/index.scss";
import App from "src/app/App";

// Root file which render component App
const rootElement: HTMLElement | null = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root: Root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
