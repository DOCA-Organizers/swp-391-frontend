import {
  Avatar,
  Box,
  Button,
  Card,
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
import { useNavigate } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CommentIcon from "@mui/icons-material/ModeComment";
import ArticleIcon from "@mui/icons-material/Article";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import EastIcon from "@mui/icons-material/East";
import { useEffect, useState } from "react";
import { CategoryInfoResponse } from "interfaces/category/categoryResponse";
import CategoryAPI from "service/category/categoryAPI";
import { isEmpty } from "lodash";
import userAPI from "service/user/userAPI";

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
  const [categoryInfo, setCategoryInfo] = useState<CategoryInfoResponse[]>([]);
  const [countAllPosts, setCountAllPost] = useState(0);
  const [countAllComments, setCountAllComments] = useState(0);
  const [countAllMembers, setCountAllMembers] = useState(0);
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

  useEffect(() => {
    const getCategoryInfo = async () => {
      const data: any = await CategoryAPI.getCategoryInfo();
      let temp: CategoryInfoResponse[] = [];
      let postTemp: number = 0;
      let commentTemp: number = 0;
      if (data && data.length > 0) {
        data.map((category: CategoryInfoResponse) => {
          commentTemp += category.numbercomment;
          postTemp += category.numberpost;
          temp.push(category);
        });
        setCategoryInfo(temp);
        setCountAllComments(commentTemp);
        setCountAllPost(postTemp);
      }
    };

    const countAllUser = async () => {
      const data: any = await userAPI.countUserIsActive();
      if (data) {
        setCountAllMembers(data);
      }
    };
    const getAll = async () => {
      const data: any = await userAPI.countUserIsActive();
      console.log("Data: ", data);
    };

    const initUseEffect = async () => {
      await Promise.all([getCategoryInfo(), countAllUser(), getAll()]);
    };

    initUseEffect();
  }, []);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundColor: "#f0f3f5",
        padding: "32px 10px",
      }}
    >
      {categoryInfo && !isEmpty(categoryInfo) ? (
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
                  <Tooltip title={categoryInfo[0].numbercomment + " Comments"}>
                    <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <CommentIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[0].numbercomment}
                      </Grid>
                    </Grid>
                  </Tooltip>
                  <Tooltip title={categoryInfo[0].numberpost + " Posts"}>
                    <Grid container sx={{ width: "50px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <ArticleIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[0].numberpost}
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
                  <Tooltip title={categoryInfo[1].numbercomment + " Comments"}>
                    <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <CommentIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[1].numbercomment}
                      </Grid>
                    </Grid>
                  </Tooltip>
                  <Tooltip title={categoryInfo[1].numberpost + " Posts"}>
                    <Grid container sx={{ width: "50px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <ArticleIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[1].numberpost}
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
                  <Tooltip title={categoryInfo[2].numbercomment + " Comments"}>
                    <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <CommentIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[2].numbercomment}
                      </Grid>
                    </Grid>
                  </Tooltip>
                  <Tooltip title={categoryInfo[2].numberpost + " Posts"}>
                    <Grid container sx={{ width: "50px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <ArticleIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[2].numberpost}
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
                  <Tooltip title={categoryInfo[3].numbercomment + " Comments"}>
                    <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <CommentIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[3].numbercomment}
                      </Grid>
                    </Grid>
                  </Tooltip>
                  <Tooltip title={categoryInfo[3].numberpost + " Posts"}>
                    <Grid container sx={{ width: "50px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <ArticleIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[3].numberpost}
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
                  <Tooltip title={categoryInfo[5].numbercomment + " Comments"}>
                    <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <CommentIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[5].numbercomment}
                      </Grid>
                    </Grid>
                  </Tooltip>
                  <Tooltip title={categoryInfo[5].numberpost + " Posts"}>
                    <Grid container sx={{ width: "50px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <ArticleIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[5].numberpost}
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
                  <Tooltip title={categoryInfo[5].numbercomment + " Comments"}>
                    <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <CommentIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[5].numbercomment}
                      </Grid>
                    </Grid>
                  </Tooltip>
                  <Tooltip title={categoryInfo[5].numberpost + " Posts"}>
                    <Grid container sx={{ width: "50px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <ArticleIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[5].numberpost}
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
                  <Tooltip title={categoryInfo[6].numbercomment + " Comments"}>
                    <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <CommentIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[6].numbercomment}
                      </Grid>
                    </Grid>
                  </Tooltip>
                  <Tooltip title={categoryInfo[6].numberpost + " Posts"}>
                    <Grid container sx={{ width: "50px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <ArticleIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[6].numberpost}
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
                  <Tooltip title={categoryInfo[7].numbercomment + " Comments"}>
                    <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <CommentIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[7].numbercomment}
                      </Grid>
                    </Grid>
                  </Tooltip>
                  <Tooltip title={categoryInfo[7].numberpost + " Posts"}>
                    <Grid container sx={{ width: "50px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <ArticleIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[7].numberpost}
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
                  <Tooltip title={categoryInfo[8].numbercomment + " Comments"}>
                    <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <CommentIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[8].numbercomment}
                      </Grid>
                    </Grid>
                  </Tooltip>
                  <Tooltip title={categoryInfo[8].numberpost + " Posts"}>
                    <Grid container sx={{ width: "50px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <ArticleIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[8].numberpost}
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
                  <Tooltip title={categoryInfo[9].numbercomment + " Comments"}>
                    <Grid container sx={{ width: "50px", marginRight: "16px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <CommentIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[9].numbercomment}
                      </Grid>
                    </Grid>
                  </Tooltip>
                  <Tooltip title={categoryInfo[9].numberpost + " Posts"}>
                    <Grid container sx={{ width: "50px" }}>
                      <Grid xs={6} sx={{ color: "#686c6e86" }}>
                        <ArticleIcon fontSize="small" color="inherit" />
                      </Grid>
                      <Grid
                        xs={5}
                        sx={{ fontWeight: "bolder", color: "#686c6e86" }}
                      >
                        {categoryInfo[9].numberpost}
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
                  <b>{countAllPosts}</b> posts &#x2022; <b>{countAllMembers}</b>{" "}
                  members
                </Typography>
                <Typography variant="body2">
                  A forum community dedicated to dog and cat owners and dog and
                  cat enthusiasts. We build forums that allow everyone to
                  discuss in a civilized manner. Everyone can participate. Come
                  join the discussion about breeding, health, behaviour,
                  housing, adopting, care, classifieds, and more! All bad
                  actions prohibited here, if detected, will be banned from the
                  system.
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
      ) : null}
    </Container>
  );
};

export default Category;
