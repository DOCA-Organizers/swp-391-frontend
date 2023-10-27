import { Box } from "@mui/material";
import Profile from "components/profile";
import SlideBar from "components/sidebar/Sidebar";

type Props = {};

const ProfilePage = () => {
  return (
    <Box>
      <SlideBar />
      <Profile />
    </Box>
  );
};

export default ProfilePage;
