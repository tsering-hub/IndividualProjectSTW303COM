import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import "./chefdashboardcard.scss";
const ChefDashboardCard = () => {
  return (
    <div className="card m-4 chefdashboard-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h3 className="text-center">55</h3>
        <hr />
        <div className="d-flex justify-content-center align-items-center">
          <BsFillCartCheckFill className="fs-5"></BsFillCartCheckFill>
          <p className="fs-4 ms-2 mt-3">Orders</p>
        </div>
      </div>
    </div>
  );
};

export default ChefDashboardCard;
