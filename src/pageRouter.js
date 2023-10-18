import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/rootLayout";
import Dashboard from "./pages/dashboard";
import Product from "./pages/Product";
import Customers from "./pages/Customers";
import Income from "./pages/Income";
import { Help } from "./pages/Help";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/income" element={<Income />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
