import { Box, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "components/footer/footer";
import Posts from "components/posts";
import Navigation from "components/profile/navigation";
import Profile from "components/profile/profile";

import SlideBar from "components/sidebar/Sidebar";

const paperStyle = {
  width: 1400,
  height: 300,
  marginTop: 160,
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
        backgroundColor: "#F0F0F0",
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
        <Posts />
      </Box>
      <Box sx={{ marginTop: 7 }}>
        <Footer />
      </Box>
    </Grid2>
  );
};

export default ProfilePage;
