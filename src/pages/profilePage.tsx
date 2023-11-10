import { Box } from "@mui/material";
import Profile from "components/profile";
import SlideBar from "components/sidebar/Sidebar";

type Props = {};

const ProfilePage = () => {
  return (
    <Box>
      <SlideBar />
      <Box sx={{ marginTop: 14 }}>
        <Profile />
      </Box>
    </Box>
  );
};

export default ProfilePage;
