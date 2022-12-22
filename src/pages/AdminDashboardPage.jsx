import React from "react";
import { Container } from "@mui/material";
import DashboardTable from "./TableDashboard";
import { Navbar } from "./Navbar";
const AdminDashboardPage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Navbar />
        <DashboardTable />
      </Container>
    </>
  );
};

export default AdminDashboardPage;
