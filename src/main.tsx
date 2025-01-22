import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";
import Country from "./Country.tsx";
import { QueryProvider } from "./components/QueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>,
);
