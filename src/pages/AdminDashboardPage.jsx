import React from "react";

import DashboardTable from "./TableDashboard";
import { Navbar } from "./Navbar";
const AdminDashboardPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <DashboardTable />
      </div>
    </>
  );
};

export default AdminDashboardPage;
