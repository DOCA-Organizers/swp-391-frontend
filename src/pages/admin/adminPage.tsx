import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import FigureShowing from "components/figureShowing";
import UserList from "components/list/UserList";
import ReportList from "components/list/reportList";
import SlideBar from "components/sidebar/Sidebar";

const AdminPage = () => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <Grid>
      <Box>
        <SlideBar />
      </Box>
      <Box sx={{ marginTop: 20, marginLeft: 20 }}>
        <FigureShowing />
        <Box
          sx={{
            backgroundColor: "#F0F0F0",
            borderRadius: 5,
            marginTop: 1,
            marginLeft: 25,
            marginRight: 5,
          }}
        >
          <Box
            sx={{
              paddingLeft: 3,
              paddingTop: 3,
              paddingBottom: 3,
              backgroundColor: "orange",
              width: 400,
              borderRadius: 5,
              border: "3px solid #1D5B9D",
              marginLeft: 5
            }}
          >
            <Typography gutterBottom variant="body1" color="#1D5B9D">
              Management
            </Typography>
            <Stack direction="row" spacing={1} >
              <Chip label="User Management" onClick={handleClick} />
              <Chip label="Post Management" onClick={handleClick} />
            </Stack>
          </Box>

          <UserList />
        </Box>
      </Box>
    </Grid>
  );
};

export default AdminPage;
