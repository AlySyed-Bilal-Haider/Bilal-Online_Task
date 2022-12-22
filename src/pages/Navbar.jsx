import { Box, Button, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import React from "react";
import LogoutBtn from "./LogoutBtn";
export const Navbar = () => {
  const btnstyle = {
    backgroundColor: "#9BFF00",
    borderRadius: "15px",
    paddingX: "8px",
    paddingY: "5px",
    color: "#050505",
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          mb: 4,
        }}
      >
        <Typography color="white" sx={{ fontSize: "32px", fontWeight: 700 }}>
          App
        </Typography>
        <Button style={btnstyle}>
          <LogoutBtn />
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginX: "auto",
          padding: "10px",
        }}
      >
        <Box>
          <Typography sx={{ color: "white", fontSize: "40px" }}>
            Today’s leaderboard
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#151515",
            borderRadius: "16px",
            padding: "20px",
            display: { md: "flex", sm: "block" },
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            width: "30%",
            textAlign: "center",
          }}
        >
          <Typography>30 MAY 2022</Typography>
          <Button style={btnstyle}>
            <PersonOutlineOutlinedIcon />
            Submission open
          </Button>
          <Typography>11 :34</Typography>
        </Box>
      </Box>
    </>
  );
};
