import React from "react";
import { AuthContext } from "./authContext";
import { Routes, Route, Navigate } from "react-router-dom";
import SnackBar from "./components/SnackBar";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useState, useEffect } from "react";
function renderRoutes(role) {
  switch (role) {
    case "admin":
      return (
        <Routes>
          <Route
            exact
            path="/admin/dashboard"
            element={<AdminDashboardPage />}
          />
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route exact path="/admin/login" element={<AdminLoginPage />}></Route>
          <Route path="*" exact element={<NotFoundPage />}></Route>
        </Routes>
      );
  }
}

function Main() {
  const [stateValue, setStateValue] = useState("");
  const { state } = React.useContext(AuthContext);
  useEffect(() => {
    setStateValue(state);
  }, [state]);

  return (
    <>
      <div className="h-full" style={{ background: "black", height: "100vh" }}>
        <div className="flex w-full">
          <div className="w-full">
            <div className="page-wrapper w-full  px-5">
              {!stateValue?.isAuthenticated
                ? renderRoutes("none")
                : renderRoutes("admin")}
            </div>
          </div>
        </div>
        <SnackBar />
      </div>
    </>
  );
}

export default Main;
