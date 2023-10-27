import Header from "components/header/header";
import Profile from "components/profile";
import SlideBar from "components/sidebar/Sidebar";
import React from "react";
import Box from "@mui/material/Box";
import Logo from "components/header/logo";

const ProfilePage = () => {
  return (
    <Box>
      <SlideBar />
      <Box sx={{marginTop: 14}}>
        <Profile />
      </Box>
    </Box>
  );
};

export default ProfilePage;
