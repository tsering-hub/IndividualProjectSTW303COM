import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardChef from "../../pages/cheff/dashboard-chef/DashboardChef";

const ChefBody = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardChef />} />
      </Routes>
    </>
  );
};

export default ChefBody;
