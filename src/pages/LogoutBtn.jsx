import React, { useContext } from "react";
import { AuthContext } from "../authContext";
function LogoutBtn() {
  const { dispatch } = useContext(AuthContext);
  const logoutHandle = () => {
    let role = localStorage.getItem("role");
    dispatch({ type: "LOGOUT" });
    window.location.href = "/" + role + "/login";
  };
  return (
    <div
      onClick={logoutHandle}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
        width: "80px",
        height: "30px",
        textAlign: "center",
        float: "right",
        fontWeight: 700,
      }}
    >
      <button>logout</button>
    </div>
  );
}

export default LogoutBtn;
