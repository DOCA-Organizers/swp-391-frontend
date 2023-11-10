import { Box, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Profile from "components/profile";
import SlideBar from "components/sidebar/Sidebar";

type Props = {};
const paperStyle = {
  width: 800,
  height: 800,
  margin: "0 auto",
};

const styleTyPo = {
  position: "relative",
  left: 600,
  top: 70,
  fontWeight: "bold",
  fontSize: 30,
};
const ProfilePage = () => {
  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(25, 118, 210, 0.04)",
      }}
    >
      <Paper elevation={20} style={paperStyle}>
        <Box display="flex" flexDirection="column">
          <SlideBar />

          <Box sx={{ marginTop: 14, position: "relative", right: 230 }}>
            <Typography sx={styleTyPo}>My Profile</Typography>
            <Profile />
          </Box>
        </Box>
      </Paper>
    </Grid2>
  );
};

export default ProfilePage;
