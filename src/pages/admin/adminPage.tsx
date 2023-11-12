import { Box, Container, Typography } from "@mui/material";
import Header from "components/header/header";
import SlideBar from "components/sidebar/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <SlideBar />
      <Box sx={{ marginTop: "500px" }}>
        <Typography>Trang Admin</Typography>
        <Outlet />
      </Box>
    </Container>
  );
};

export default AdminPage;
