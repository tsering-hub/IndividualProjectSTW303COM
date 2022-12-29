import React from "react";
import "./dashboardchef.scss";
import { RxDashboard } from "react-icons/rx";
import ChefDashboardCard from "../../../components/chefdashboardCard/ChefDashboardCard";
import ChefDashboardOrderTable from "../../../components/chefdashboardordertable/ChefDashboardOrderTable";
const DashboardChef = () => {
  return (
    <div className="dashboardchef-container">
      <h3>
        <RxDashboard></RxDashboard> Dashboard
      </h3>
      <hr />
      <div className="d-flex justify-content-center">
        <ChefDashboardCard></ChefDashboardCard>
        <ChefDashboardCard></ChefDashboardCard>
        <ChefDashboardCard></ChefDashboardCard>
        <ChefDashboardCard></ChefDashboardCard>
      </div>
      <h4 className="mt-4">Recent Orders</h4>
      <hr />
      <div>
        <ChefDashboardOrderTable></ChefDashboardOrderTable>
      </div>
    </div>
  );
};

export default DashboardChef;
