import React from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const navigate = useNavigate();

  const handlGoToAdmin = () => {
    navigate("/add-admin");
  };

  return (
    <div>
      <h2 className="admin" onClick={handlGoToAdmin}>
        Admin
      </h2>
    </div>
  );
};
