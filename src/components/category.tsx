import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CommentIcon from "@mui/icons-material/ModeComment";
import ArticleIcon from "@mui/icons-material/Article";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import EastIcon from "@mui/icons-material/East";

const listItemButtonStyles = {
  backgroundColor: "#ffffff",
  border: "1px solid",
  borderColor: "white",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#d5d3d3",
  },
};

const boxStyles = {
  color: "#ffffff",
  borderRadius: "16px",
  fontWeight: "bold",
  backgroundColor: "#1d5b9d",
  padding: "16px 0 16px 16px",
  width: "1366px",
};

const Category = () => {
  const navigate = useNavigate();
  const handleNavigate = (categoryID: number) => {
    let num = 0;
    switch (categoryID) {
      case 1:
        num = 1;
        navigate(`dog-chat/${num}`);
        break;

      case 2:
        num = 2;
        navigate(`dog-health-nutrition/${num}`);
        break;

      case 3:
        num = 3;
        navigate(`dog-services/${num}`);
        break;

      case 4:
        num = 4;
        navigate(`dog-show-events/${num}`);
        break;

      case 5:
        num = 5;
        navigate(`cat-chat/${num}`);
        break;

      case 6:
        num = 6;
        navigate(`cat-health-nutrition/${num}`);
        break;

      case 7:
        num = 7;
        navigate(`cat-training-and-behavior/${num}`);
        break;

      case 8:
        num = 8;
        navigate(`cat-show-events/${num}`);
        break;

      case 9:
        num = 9;
        navigate(`exchange-dog/${num}`);
        break;

      case 10:
        num = 10;
        navigate(`exchange-cat/${num}`);
        break;

      default:
        console.log("Default");
        break;
    }
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundColor: "#f0f3f5",
        padding: "32px 10px",
      }}
    >
      <Grid container>
        <Grid xs={9} sx={{ padding: "0 16px" }}>
          <Box sx={boxStyles}>
            <Typography
              sx={{
                fontWeight: "bolder",
              }}
            >
              Dog Forum
            </Typography>
          </Box>

          <List>
            <ListItem>
              <ListItemButton
                sx={listItemButtonStyles}
                onClick={() => {
                  handleNavigate(1);
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#1d5b9d" }}>
                    <PetsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Dog Chat"
                  primaryTypographyProps={{
                    fontWeight: "bolder",
                    color: "#1d5b9d",
                  }}
                  secondary="Chat about our beloved dogs and puppies. Discuss anything dog related in this forum."
                />
                <Tooltip title="85 Comments">
                  <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <CommentIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      85
                    </Grid>
                  </Grid>
                </Tooltip>
                <Tooltip title="165 Posts">
                  <Grid container sx={{ width: "50px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <ArticleIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      165
                    </Grid>
                  </Grid>
                </Tooltip>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton
                sx={listItemButtonStyles}
                onClick={() => {
                  handleNavigate(2);
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#1d5b9d" }}>
                    <HealthAndSafetyIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Dog Health and Nutrition"
                  primaryTypographyProps={{
                    fontWeight: "bolder",
                    color: "#1d5b9d",
                  }}
                  secondary="Discuss topics related to the health of our dogs and advice on how to help treat common health problems and issues including dog nutrition."
                />
                <Tooltip title="123 Comments">
                  <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <CommentIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      123
                    </Grid>
                  </Grid>
                </Tooltip>
                <Tooltip title="365 Posts">
                  <Grid container sx={{ width: "50px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <ArticleIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      365
                    </Grid>
                  </Grid>
                </Tooltip>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={listItemButtonStyles}
                onClick={() => {
                  handleNavigate(3);
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#1d5b9d" }}>
                    <MiscellaneousServicesIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Dog Services"
                  primaryTypographyProps={{
                    fontWeight: "bolder",
                    color: "#1d5b9d",
                  }}
                  secondary="Discuss topics and receive advice regarding various dog services, from dog walking, dog grooming, dog boarding etc.."
                />
                <Tooltip title="12 Comments">
                  <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <CommentIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      12
                    </Grid>
                  </Grid>
                </Tooltip>
                <Tooltip title="69 Posts">
                  <Grid container sx={{ width: "50px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <ArticleIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      69
                    </Grid>
                  </Grid>
                </Tooltip>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={listItemButtonStyles}
                onClick={() => {
                  handleNavigate(4);
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#1d5b9d" }}>
                    <EmojiEventsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Dog Show and Events"
                  primaryTypographyProps={{
                    fontWeight: "bolder",
                    color: "#1d5b9d",
                  }}
                  secondary="Discuss topics relating to the showing of your dogs, including details of dog shows and other dog events."
                />
                <Tooltip title="66 Comments">
                  <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <CommentIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      66
                    </Grid>
                  </Grid>
                </Tooltip>
                <Tooltip title="73 Posts">
                  <Grid container sx={{ width: "50px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <ArticleIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      73
                    </Grid>
                  </Grid>
                </Tooltip>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={listItemButtonStyles}
                onClick={() => {
                  handleNavigate(9);
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#1d5b9d" }}>
                    <CurrencyExchangeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Dog Exchange"
                  primaryTypographyProps={{
                    fontWeight: "bolder",
                    color: "#1d5b9d",
                  }}
                  secondary="Discuss topics related to the dog trade."
                />
                <Tooltip title="30 Comments">
                  <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <CommentIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      30
                    </Grid>
                  </Grid>
                </Tooltip>
                <Tooltip title="200 Posts">
                  <Grid container sx={{ width: "50px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <ArticleIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      200
                    </Grid>
                  </Grid>
                </Tooltip>
              </ListItemButton>
            </ListItem>
          </List>
          <Box sx={boxStyles}>
            <Typography
              sx={{
                fontWeight: "bolder",
              }}
            >
              Cat Forum
            </Typography>
          </Box>

          <List>
            <ListItem>
              <ListItemButton
                sx={listItemButtonStyles}
                onClick={() => {
                  handleNavigate(5);
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#1d5b9d" }}>
                    <PetsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Cat Chat"
                  primaryTypographyProps={{
                    fontWeight: "bolder",
                    color: "#1d5b9d",
                  }}
                  secondary="Chat about our beloved cats and kittens. Discuss anything cat related in this forum."
                />
                <Tooltip title="92 Comments">
                  <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <CommentIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      92
                    </Grid>
                  </Grid>
                </Tooltip>
                <Tooltip title="207 Posts">
                  <Grid container sx={{ width: "50px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <ArticleIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      207
                    </Grid>
                  </Grid>
                </Tooltip>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton
                sx={listItemButtonStyles}
                onClick={() => {
                  handleNavigate(6);
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#1d5b9d" }}>
                    <HealthAndSafetyIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Cat Health and Nutrition"
                  primaryTypographyProps={{
                    fontWeight: "bolder",
                    color: "#1d5b9d",
                  }}
                  secondary="Discuss topics related to the health of cats and advice on how to help treat health problems and issues including cat nutrition."
                />
                <Tooltip title="369 Comments">
                  <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <CommentIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      369
                    </Grid>
                  </Grid>
                </Tooltip>
                <Tooltip title="170 Posts">
                  <Grid container sx={{ width: "50px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <ArticleIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      170
                    </Grid>
                  </Grid>
                </Tooltip>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={listItemButtonStyles}
                onClick={() => {
                  handleNavigate(7);
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#1d5b9d" }}>
                    <LocalLibraryIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Cat Training and Behaviour"
                  primaryTypographyProps={{
                    fontWeight: "bolder",
                    color: "#1d5b9d",
                  }}
                  secondary="Discuss cat training and behaviour problems in this section. Are you having problems with your cats behaviour? Then submit your problems and get help from other members."
                />
                <Tooltip title="254 Comments">
                  <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <CommentIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      254
                    </Grid>
                  </Grid>
                </Tooltip>
                <Tooltip title="138 Posts">
                  <Grid container sx={{ width: "50px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <ArticleIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      138
                    </Grid>
                  </Grid>
                </Tooltip>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={listItemButtonStyles}
                onClick={() => {
                  handleNavigate(8);
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#1d5b9d" }}>
                    <EmojiEventsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Cat Show and Events"
                  primaryTypographyProps={{
                    fontWeight: "bolder",
                    color: "#1d5b9d",
                  }}
                  secondary="Discuss topics relating to the showing of your cats, including details of cats shows and other cat events."
                />
                <Tooltip title="198 Comments">
                  <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <CommentIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      198
                    </Grid>
                  </Grid>
                </Tooltip>
                <Tooltip title="109 Posts">
                  <Grid container sx={{ width: "50px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <ArticleIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      109
                    </Grid>
                  </Grid>
                </Tooltip>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={listItemButtonStyles}
                onClick={() => {
                  handleNavigate(10);
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#1d5b9d" }}>
                    <CurrencyExchangeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Cat Exchange"
                  primaryTypographyProps={{
                    fontWeight: "bolder",
                    color: "#1d5b9d",
                  }}
                  secondary="Discuss topics related to the cat trade."
                />
                <Tooltip title="55 Comments">
                  <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <CommentIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      55
                    </Grid>
                  </Grid>
                </Tooltip>
                <Tooltip title="101 Posts">
                  <Grid container sx={{ width: "50px" }}>
                    <Grid xs={6} sx={{ color: "#686c6e86" }}>
                      <ArticleIcon fontSize="small" color="inherit" />
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                    >
                      101
                    </Grid>
                  </Grid>
                </Tooltip>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid xs={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                fontWeight="bolder"
                sx={{ color: "#1d5b9d" }}
              >
                DOCA Dog Cat Forums
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <b>500</b> posts &#x2022; <b>20</b> members
              </Typography>
              <Typography variant="body2">
                A forum community dedicated to dog and cat owners and dog and
                cat enthusiasts. We build forums that allow everyone to discuss
                in a civilized manner. Everyone can participate. Come join the
                discussion about breeding, health, behaviour, housing, adopting,
                care, classifieds, and more! All bad actions prohibited here, if
                detected, will be banned from the system.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, mt: "16px" }}>
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
                      <Avatar src={require("../../src/assets/panda.png")} />
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
                      <Avatar src={require("../../src/assets/man.png")} />
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
                      <Avatar src={require("../../src/assets/girl.png")} />
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
          </Card>
          <Card sx={{ minWidth: 275, mt: "16px" }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                fontWeight="bolder"
                sx={{ color: "#1d5b9d" }}
              >
                Top Contributors
              </Typography>
              <Divider />
              <Button variant="text" endIcon={<EastIcon />}>
                View All
              </Button>
              <Card variant="outlined">
                <CardHeader
                  avatar={
                    <IconButton>
                      <Avatar src={require("../../src/assets/panda.png")} />
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
                      <Avatar src={require("../../src/assets/man.png")} />
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
                      <Avatar src={require("../../src/assets/girl.png")} />
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
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Category;
