import { Box, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Posts from "components/posts";
import Navigation from "components/profile/navigation";
import Profile from "components/profile/profile";

import SlideBar from "components/sidebar/Sidebar";

const paperStyle = {
  width: 1400,
  height: 300,
  marginTop: 180,
};

const styleTyPo = {
  position: "relative",
  left: 600,
  top: 70,
  fontWeight: "bold",
  fontSize: 30,
  width: 100,
};
const ProfilePage = () => {
  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{
        minHeight: "30vh",
        backgroundColor: "rgba(25, 118, 210, 0.04)",
      }}
    >
      <Paper elevation={20} style={paperStyle}>
        <Box display="flex" flexDirection="column">
          <SlideBar />
          <Box
            sx={{
              position: "relative",
              bottom: 130,
              right: 50,
              marginRight: 30,
            }}
          >
            <Profile />
          </Box>
        </Box>
      </Paper>
      <Box>
        <Navigation />
      </Box>
      <Box sx={{ marginTop: 7 }}>
        <Posts />
      </Box>
    </Grid2>
  );
};

export default ProfilePage;
