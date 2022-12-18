import React from "react";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import DashboardAdmin from "../../pages/admin/dashboard-admin/DashboardAdmin";

const AdminBody = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardAdmin />} />
      </Routes>
    </>
  );
};

export default AdminBody;
