import {
  Avatar,
  Box,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Card,
  CardHeader,
  Button
} from "@mui/material";
import FigureShowing from "components/figureShowing";
import UserList from "components/list/UserList";
import ReportList from "components/list/reportList";
import SlideBar from "components/sidebar/Sidebar";
import EastIcon from "@mui/icons-material/East";

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
            marginRight: 3,
            
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
            {/* <Card sx={{ minWidth: 275, mt: "16px" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  fontWeight="bolder"
                  sx={{ color: "#1d5b9d" }}
                >
                  Community Staff
                </Typography>
                <Typography color="text.secondary">
                  <b>4</b> staffs
                </Typography>
                <Divider />
                <Button variant="text" endIcon={<EastIcon />}>
                  View All
                </Button>
                <Card variant="outlined">
                  <CardHeader
                    avatar={
                      <IconButton>
                        <Avatar src={require("../../assets/panda.png")} />
                      </IconButton>
                    }
                    title="Ronaldo de lima"
                    titleTypographyProps={{
                      fontWeight: "bolder",
                      color: "#1d5b9d",
                    }}
                    subheader="Staff"
                  />
                </Card>
                <Card variant="outlined" sx={{ marginTop: "8px" }}>
                  <CardHeader
                    avatar={
                      <IconButton>
                        <Avatar src={require("../../assets/man.png")} />
                      </IconButton>
                    }
                    title="Messi"
                    titleTypographyProps={{
                      fontWeight: "bolder",
                      color: "#1d5b9d",
                    }}
                    subheader="Staff"
                  />
                </Card>
                <Card variant="outlined" sx={{ marginTop: "8px" }}>
                  <CardHeader
                    avatar={
                      <IconButton>
                        <Avatar src={require("../../assets/girl.png")} />
                      </IconButton>
                    }
                    title="Ronaldo"
                    titleTypographyProps={{
                      fontWeight: "bolder",
                      color: "#1d5b9d",
                    }}
                    subheader="Staff"
                  />
                </Card>
              </CardContent>
            </Card> */}
            <Typography gutterBottom variant="body1" color="#1D5B9D">
              Management
            </Typography>
            <Stack direction="row" spacing={1} >
              <Chip label="User Management" onClick={handleClick} />
            </Stack>
          </Box>

          <UserList />
        </Box>
      </Box>
    </Grid>
  );
};

export default AdminPage;
