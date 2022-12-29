import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardChef from "../../pages/cheff/dashboard-chef/DashboardChef";
import "./chefbody.scss";
const ChefBody = () => {
  return (
    <>
      <div className="chefbody-container">
        <Routes>
          <Route path="/" element={<DashboardChef />} />
        </Routes>
      </div>
    </>
  );
};

export default ChefBody;
