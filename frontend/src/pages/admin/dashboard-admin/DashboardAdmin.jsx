import React from "react";
import { Link } from "react-router-dom";
import { AiFillRightCircle } from "react-icons/ai";

import order from "../../../assets/order.svg";
import foods from "../../../assets/foods.svg";
import chef from "../../../assets/chef.svg";
import customers from "../../../assets/customers.svg";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import "./dashboardHome.scss";
const barChartData = [
  { year: "2016", users: 30 },
  { year: "2017", users: 50 },
  { year: "2018", users: 55 },
  { year: "2019", users: 58 },
  { year: "2020", users: 35 },
  { year: "2021", users: 70 },
  { year: "2022", users: 80 },
];
const LineChartData = [
  { year: "2016", books: 30 },
  { year: "2017", books: 50 },
  { year: "2018", books: 55 },
  { year: "2019", books: 58 },
  { year: "2020", books: 35 },
  { year: "2021", books: 70 },
  { year: "2022", books: 80 },
];

const DashboardAdmin = () => {
  return (
    <div className="dashboard-home">
      <div className="dashboard-home__cards">
        <DashboardCard
          heading="Orders"
          icon={order}
          count={200}
          link={"/users"}
        />
        <DashboardCard
          heading="Chefs"
          icon={chef}
          count={200}
          link={"/books"}
        />
        <DashboardCard
          heading="Foods"
          icon={foods}
          count={200}
          link={"/sales"}
        />
        <DashboardCard
          heading="Customers"
          icon={customers}
          count={200}
          link={"/sales"}
        />
      </div>
      <div className="dashboard-charts">
        <div className="dashboard-charts__chart">
          <h1 className="dashboard-charts__chart--heading">Customers Growth</h1>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barChartData} className="barchart">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#ff6363" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-charts__chart">
          <h1 className="dashboard-charts__chart--heading">Orders Traffic</h1>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={LineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="books" stroke="#ff6363" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="dashboard-charts">
        <div className="dashboard-charts__chart">
          <h1 className="dashboard-charts__chart--heading">Customers Growth</h1>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barChartData} className="barchart">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#ff6363" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-charts__chart">
          <h1 className="dashboard-charts__chart--heading">Orders Traffic</h1>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={LineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="books" stroke="#ff6363" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ heading, icon, count, link }) => {
  return (
    <div className="dash-card">
      <div className="dash-card__heading mt-3">
        <span className="dash-card__heading--text">{heading}</span>
      </div>
      <hr />
      <div className="dash-card__icon">
        <img className="img-fluid" src={icon} alt={heading} />
      </div>
      <p className="dash-card__count d-flex justify-content-between">
        {`${heading === "sales" ? "Rs. " : ""}`}
        {count}
        <Link to={link}>
          <AiFillRightCircle className="dash-card__heading--icon" />
        </Link>
      </p>
    </div>
  );
};

export default DashboardAdmin;
