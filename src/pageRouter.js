import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/rootLayout";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
