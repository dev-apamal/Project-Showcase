import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Menu from "./components/Menu";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Dashboard />} /> */}
        <Route index element={<Dashboard />} />
        <Route path="Menu" element={<Menu />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
