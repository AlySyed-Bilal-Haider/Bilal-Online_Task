import React, { useContext } from "react";
import { AuthContext } from "../authContext";
const AdminDashboardPage = () => {
  const { dispatch } = useContext(AuthContext);
  const logoutHandle = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <div
        onClick={logoutHandle}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
          border: "1px solid black",
          width: "80px",
          height: "30px",
          textAlign: "center",
          float: "right",
        }}
      >
        <button>logout</button>
      </div>
      <div className="w-full flex justify-center items-center text-7xl h-screen text-gray-700 ">
        Dashboard
      </div>
    </>
  );
};

export default AdminDashboardPage;
