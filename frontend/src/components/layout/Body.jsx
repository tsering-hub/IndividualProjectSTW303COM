import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../login/Login";

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default Body;
