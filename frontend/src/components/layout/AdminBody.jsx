import React from "react";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import DashboardAdmin from "../../pages/admin/dashboard-admin/DashboardAdmin";
import FoodItems from "../../pages/admin/fooditems-admin/FoodItems";

const AdminBody = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardAdmin />} />
        <Route path="/fooditems" element={<FoodItems />} />
      </Routes>
    </>
  );
};

export default AdminBody;
