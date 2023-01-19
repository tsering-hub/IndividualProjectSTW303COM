import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import "./chefdashboardcard.scss";
const ChefDashboardCard = ({ order }) => {
  console.log(order);
  return (
    <div className="card m-4 chefdashboard-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="text-center">Table No. : {order.tablenumber}</h5>
        <h6 className="text-center">Order By : {order.userId.username}</h6>
        <hr />
        <div className="d-flex justify-content-center align-items-center">
          <table className="table table-striped table-hover">
            <thead>
              <tr class="thead">
                <th scope="col">Food Items</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.orderItems.map((food) => (
                <tr>
                  <td data-label="Name">{food.foodId.name}</td>
                  <td data-label="Title">{food.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center">
          {order.orderstatus === "Pending" && (
            <>
              <button className="btn btn-success fs-5 m-2">Accept</button>
              <button className="btn btn-danger fs-5 m-2">Reject</button>
            </>
          )}
          {order.orderstatus === "Preparing" && (
            <button className="btn btn-success fs-5 m-2">Ready</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChefDashboardCard;
