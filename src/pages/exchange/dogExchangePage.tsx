import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
  Button,
  Stack,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Avatar,
  CardHeader,
  Divider,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
} from "@mui/material";
import SlideBar from "components/sidebar/Sidebar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "components/footer/footer";
import PaginationComponent from "components/pagination/paginationComponent";
import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { USER_TOKEN_KEY } from "constant";
import { ToastContainer, toast } from "react-toastify";
import { isEmpty } from "lodash";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EastIcon from "@mui/icons-material/East";
import CommentIcon from "@mui/icons-material/ModeComment";
import ArticleIcon from "@mui/icons-material/Article";

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const TextareaAutosize = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 16px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const TextareaForm = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  width: 765px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 16px 12px;
  border-radius: 8px;
  margin: "8px 0 0 0 0";
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const titleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  lineHight: "72px",
};

const textBodyStyle = {
  fontSize: "18px",
  color: "#1d5b9d",
};

const DogExchangePage = () => {
  const navigate = useNavigate();
  const { categoryID } = useParams();
  const access_token = localStorage.getItem(USER_TOKEN_KEY);
  const [openFormCreatePost, setOpenOpenFormCreatePost] = useState(false);
  const [sex, setSex] = useState();
  const [informationSelected, setInformationSelected] = useState("");
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChangeImage = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const handleChangeSex = (event: SelectChangeEvent) => {
    setSex(event.target.value as any);
  };

  // const handleSelectInformation = (information: string) => {
  //   if (information === "pet") {

  //   }
  // }

  const handleClickOpenFormCreatePost = () => {
    setOpenOpenFormCreatePost(true);
    // if (access_token && !isEmpty(access_token)) {
    //   setOpenOpenFormCreatePost(true);
    // }
    // toast.warning("Please login before create new post!", {
    //   position: toast.POSITION.TOP_CENTER,
    // });
  };

  const handleCloseFormCreatePost = () => {
    setOpenOpenFormCreatePost(false);
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ backgroundColor: "#f0f3f5" }}
    >
      <SlideBar />
      <Box sx={{ paddingTop: "109px" }}>
        <Box
          sx={{ height: "150px", backgroundColor: "white", padding: "36px" }}
        >
          <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon />}>
            <Link
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "19px",
                cursor: "pointer",
              }}
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              <HomeIcon sx={{ mr: 1 }} fontSize="medium" />
              Home
            </Link>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "19px",
                fontWeight: "bolder",
                color: "#1d5b9d",
              }}
            >
              <CurrencyExchangeIcon sx={{ mr: 1 }} fontSize="medium" />
              Dog Exchange
            </Typography>
          </Breadcrumbs>
          <Typography mt={2} variant="h4" color="#1d5b9d" fontWeight="bolder">
            Dog Exchange
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            height: "100%",
            width: "100%",
            color: "#f0f0f0",
            padding: "16px 32px",
          }}
        >
          <Grid xs={9} paddingRight="36px">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Button variant="text" sx={{ backgroundColor: "white" }}>
                Most recent
              </Button>
              <Button
                variant="contained"
                startIcon={<CreateIcon />}
                sx={{
                  backgroundColor: "#1d5b9d",
                  "&:hover": {
                    backgroundColor: "#2a6db5",
                  },
                }}
                onClick={handleClickOpenFormCreatePost}
              >
                Create New Post
              </Button>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="start"
              sx={{
                mt: "32px",
              }}
              rowGap={2}
            >
              {/* Post Layout */}
              <Grid
                container
                sx={{
                  backgroundColor: "#ffffff",
                  width: "100%",
                  height: "100px",
                }}
              >
                <Grid xs={6}>
                  <List>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "red" }} variant="rounded">
                          <img
                            alt="avt"
                            src={require("../../assets/man.png")}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Link
                              sx={{
                                color: "#1d5b9d",
                                fontWeight: "bolder",
                                cursor: "pointer",
                                textDecoration: "none",
                                "&:hover": {
                                  color: "#347ecd",
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Labrador Retriever Jubilee: Embracing Boundless
                              Affection
                            </Link>
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline", width: "400px" }}
                              variant="body2"
                              noWrap
                            >
                              14/11/2023 - 12:18
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  xs={3}
                >
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
                </Grid>
                <Grid
                  xs={3}
                  container
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  p={2}
                >
                  <Typography color="#1d5b9d">
                    <b>Exchange Post</b>
                  </Typography>
                  <Typography color="#1d5b9d">
                    By <i>iamsuperman</i>{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "#ffffff",
                  width: "100%",
                  height: "100px",
                }}
              >
                <Grid xs={6}>
                  <List>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "red" }} variant="rounded">
                          <img
                            alt="avt"
                            src={require("../../assets/man.png")}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Link
                              sx={{
                                color: "#1d5b9d",
                                fontWeight: "bolder",
                                cursor: "pointer",
                                textDecoration: "none",
                                "&:hover": {
                                  color: "#347ecd",
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Labrador Retriever Jubilee: Embracing Boundless
                              Affection
                            </Link>
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline", width: "400px" }}
                              variant="body2"
                              noWrap
                            >
                              14/11/2023 - 12:18
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  xs={3}
                >
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
                </Grid>
                <Grid
                  xs={3}
                  container
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  p={2}
                >
                  <Typography color="#1d5b9d">
                    <b>Exchange Post</b>
                  </Typography>
                  <Typography color="#1d5b9d">
                    By <i>iamsuperman</i>{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "#ffffff",
                  width: "100%",
                  height: "100px",
                }}
              >
                <Grid xs={6}>
                  <List>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "red" }} variant="rounded">
                          <img
                            alt="avt"
                            src={require("../../assets/man.png")}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Link
                              sx={{
                                color: "#1d5b9d",
                                fontWeight: "bolder",
                                cursor: "pointer",
                                textDecoration: "none",
                                "&:hover": {
                                  color: "#347ecd",
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Labrador Retriever Jubilee: Embracing Boundless
                              Affection
                            </Link>
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline", width: "400px" }}
                              variant="body2"
                              noWrap
                            >
                              14/11/2023 - 12:18
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  xs={3}
                >
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
                </Grid>
                <Grid
                  xs={3}
                  container
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  p={2}
                >
                  <Typography color="#1d5b9d">
                    <b>Exchange Post</b>
                  </Typography>
                  <Typography color="#1d5b9d">
                    By <i>iamsuperman</i>{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "#ffffff",
                  width: "100%",
                  height: "100px",
                }}
              >
                <Grid xs={6}>
                  <List>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "red" }} variant="rounded">
                          <img
                            alt="avt"
                            src={require("../../assets/man.png")}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Link
                              sx={{
                                color: "#1d5b9d",
                                fontWeight: "bolder",
                                cursor: "pointer",
                                textDecoration: "none",
                                "&:hover": {
                                  color: "#347ecd",
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Labrador Retriever Jubilee: Embracing Boundless
                              Affection
                            </Link>
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline", width: "400px" }}
                              variant="body2"
                              noWrap
                            >
                              14/11/2023 - 12:18
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  xs={3}
                >
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
                </Grid>
                <Grid
                  xs={3}
                  container
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  p={2}
                >
                  <Typography color="#1d5b9d">
                    <b>Exchange Post</b>
                  </Typography>
                  <Typography color="#1d5b9d">
                    By <i>iamsuperman</i>{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "#ffffff",
                  width: "100%",
                  height: "100px",
                }}
              >
                <Grid xs={6}>
                  <List>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "red" }} variant="rounded">
                          <img
                            alt="avt"
                            src={require("../../assets/man.png")}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Link
                              sx={{
                                color: "#1d5b9d",
                                fontWeight: "bolder",
                                cursor: "pointer",
                                textDecoration: "none",
                                "&:hover": {
                                  color: "#347ecd",
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Labrador Retriever Jubilee: Embracing Boundless
                              Affection
                            </Link>
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline", width: "400px" }}
                              variant="body2"
                              noWrap
                            >
                              14/11/2023 - 12:18
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  xs={3}
                >
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
                </Grid>
                <Grid
                  xs={3}
                  container
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  p={2}
                >
                  <Typography color="#1d5b9d">
                    <b>Exchange Post</b>
                  </Typography>
                  <Typography color="#1d5b9d">
                    By <i>iamsuperman</i>{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "#ffffff",
                  width: "100%",
                  height: "100px",
                }}
              >
                <Grid xs={6}>
                  <List>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "red" }} variant="rounded">
                          <img
                            alt="avt"
                            src={require("../../assets/man.png")}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Link
                              sx={{
                                color: "#1d5b9d",
                                fontWeight: "bolder",
                                cursor: "pointer",
                                textDecoration: "none",
                                "&:hover": {
                                  color: "#347ecd",
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Labrador Retriever Jubilee: Embracing Boundless
                              Affection
                            </Link>
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline", width: "400px" }}
                              variant="body2"
                              noWrap
                            >
                              14/11/2023 - 12:18
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  xs={3}
                >
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
                </Grid>
                <Grid
                  xs={3}
                  container
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  p={2}
                >
                  <Typography color="#1d5b9d">
                    <b>Exchange Post</b>
                  </Typography>
                  <Typography color="#1d5b9d">
                    By <i>iamsuperman</i>{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "#ffffff",
                  width: "100%",
                  height: "100px",
                }}
              >
                <Grid xs={6}>
                  <List>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "red" }} variant="rounded">
                          <img
                            alt="avt"
                            src={require("../../assets/man.png")}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Link
                              sx={{
                                color: "#1d5b9d",
                                fontWeight: "bolder",
                                cursor: "pointer",
                                textDecoration: "none",
                                "&:hover": {
                                  color: "#347ecd",
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Labrador Retriever Jubilee: Embracing Boundless
                              Affection
                            </Link>
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline", width: "400px" }}
                              variant="body2"
                              noWrap
                            >
                              14/11/2023 - 12:18
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  xs={3}
                >
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
                </Grid>
                <Grid
                  xs={3}
                  container
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  p={2}
                >
                  <Typography color="#1d5b9d">
                    <b>Exchange Post</b>
                  </Typography>
                  <Typography color="#1d5b9d">
                    By <i>iamsuperman</i>{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "#ffffff",
                  width: "100%",
                  height: "100px",
                }}
              >
                <Grid xs={6}>
                  <List>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "red" }} variant="rounded">
                          <img
                            alt="avt"
                            src={require("../../assets/man.png")}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Link
                              sx={{
                                color: "#1d5b9d",
                                fontWeight: "bolder",
                                cursor: "pointer",
                                textDecoration: "none",
                                "&:hover": {
                                  color: "#347ecd",
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Labrador Retriever Jubilee: Embracing Boundless
                              Affection
                            </Link>
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline", width: "400px" }}
                              variant="body2"
                              noWrap
                            >
                              14/11/2023 - 12:18
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  xs={3}
                >
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
                </Grid>
                <Grid
                  xs={3}
                  container
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  p={2}
                >
                  <Typography color="#1d5b9d">
                    <b>Exchange Post</b>
                  </Typography>
                  <Typography color="#1d5b9d">
                    By <i>iamsuperman</i>{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              mt={2}
            >
              <PaginationComponent />
            </Grid>
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
                  Dog Exchange
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <b>210</b> posts &#x2022; <b>8</b> members
                </Typography>
                <Typography variant="body2">
                  Welcome to our Dog Exchange Forum, where canine enthusiasts
                  come together to facilitate the exchange of dogs with care and
                  responsibility. This platform provides a space for individuals
                  looking to rehome their beloved pets or find new homes for
                  dogs in need. Users can post adoption listings, share
                  information about their dogs, and connect with potential
                  adopters.
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
                        <Avatar src={require("../../assets/girl.png")} />
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
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Dialog
        open={openFormCreatePost}
        onClose={handleCloseFormCreatePost}
        maxWidth="md"
        fullWidth={true}
      >
        <DialogTitle
          sx={{
            fontSize: "24px",
            color: "#1d5b9d",
            fontWeight: "bolder",
            marginLeft: "16px",
          }}
        >
          Create New Post
        </DialogTitle>
        <DialogContentText sx={{ marginLeft: "40px" }}>
          Please share with everyone about your interesting things!
        </DialogContentText>
        <DialogContent placeholder="Content">
          <Grid container padding="0 16px">
            <Grid xs={6}>
              <TextField
                label="Title"
                sx={{ width: "100%", marginTop: "16px" }}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              xs={3}
              style={{ display: "flex", paddingTop: "10px" }}
            >
              <Typography style={titleStyle}>Post Type: </Typography>
              <Typography ml={1} style={textBodyStyle}>
                Exchange
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              xs={3}
              style={{ display: "flex", paddingTop: "10px" }}
            >
              <Typography style={titleStyle}>Pet Type: </Typography>
              <Typography ml={1} style={textBodyStyle}>
                Dog
              </Typography>
            </Grid>
            <Grid xs={12} mt={1}>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Content"
                minRows={3}
                maxRows={3}
              />
            </Grid>

            <Grid container ml={1}>
              <Typography width="100%" variant="overline" color="#1d5b9d">
                Information exchange
              </Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  setInformationSelected("pet");
                }}
              >
                Pet
              </Button>
              <Button
                sx={{ ml: "8px" }}
                variant="outlined"
                onClick={() => {
                  setInformationSelected("item");
                }}
              >
                Item
              </Button>
            </Grid>
            <Grid container mt={1} p={1}>
              {informationSelected === "pet" ? (
                <Card sx={{ padding: "8px" }}>
                  <TextField sx={{ width: "370px" }} label="Pet name" />
                  <TextField
                    sx={{ ml: 1, width: "200px" }}
                    label="Pet age"
                    type="number"
                  />
                  <TextField
                    sx={{ ml: 1, width: "180px" }}
                    label="Pet type"
                    value="Dog"
                    disabled
                  />

                  <FormControl
                    fullWidth
                    sx={{ mt: "16px", width: "370px", mb: "8px" }}
                  >
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Price
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      type="number"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Price"
                    />
                  </FormControl>
                  <FormControl
                    sx={{ width: "387px", mt: "16px", ml: "8px", mb: "8px" }}
                  >
                    <InputLabel id="sex-select-label">Sex</InputLabel>
                    <Select
                      labelId="sex-select-label"
                      id="sex-select"
                      value={sex}
                      label="Sex"
                      onChange={handleChangeSex}
                      displayEmpty
                    >
                      <MenuItem disabled value="">
                        <em>Select your pet sex</em>
                      </MenuItem>
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                  <TextareaForm
                    placeholder="Describe your pet...."
                    minRows={3}
                    maxRows={3}
                  />

                  <Box mt={1} ml={1}>
                    <ImageUploading
                      multiple={false}
                      value={images}
                      onChange={onChangeImage}
                      maxNumber={maxNumber}
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                          <Button
                            startIcon={<CloudUploadOutlinedIcon />}
                            variant="contained"
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            Thêm ảnh
                          </Button>

                          {imageList.map((image, index) => (
                            <div
                              key={index}
                              className="image-item"
                              style={{
                                width: "30vw",
                                marginBottom: "16px",
                                marginTop: "16px",
                                border: "1px solid",
                                padding: "16px",
                                borderRadius: "8px",
                              }}
                            >
                              <img src={image.dataURL} alt="" width="100%" />
                              <div className="image-item__btn-wrapper">
                                <Button
                                  variant="outlined"
                                  startIcon={<ChangeCircleOutlinedIcon />}
                                  onClick={() => onImageUpdate(index)}
                                >
                                  Thay đổi
                                </Button>
                                <Button
                                  variant="outlined"
                                  startIcon={<DeleteOutlineOutlinedIcon />}
                                  sx={{ ml: 2 }}
                                  onClick={() => onImageRemove(index)}
                                >
                                  Xóa
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                  </Box>
                </Card>
              ) : informationSelected === "item" ? (
                // zzzzzzzzzzzzzzzz
                <Card sx={{ padding: "8px" }}>
                  <TextField sx={{ width: "250px", mb: 1 }} label="Item name" />

                  <TextField
                    sx={{ ml: 1, width: "250px", mb: 1 }}
                    label="Pet type"
                    value="Dog"
                    disabled
                  />

                  <FormControl fullWidth sx={{ ml: 1, width: "250px", mb: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Price
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      type="number"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Price"
                    />
                  </FormControl>
                  <TextareaForm
                    placeholder="Describe your pet...."
                    minRows={3}
                    maxRows={3}
                  />

                  <Box mt={1} ml={1}>
                    <ImageUploading
                      multiple={false}
                      value={images}
                      onChange={onChangeImage}
                      maxNumber={maxNumber}
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                          <Button
                            startIcon={<CloudUploadOutlinedIcon />}
                            variant="contained"
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            Thêm ảnh
                          </Button>

                          {imageList.map((image, index) => (
                            <div
                              key={index}
                              className="image-item"
                              style={{
                                width: "30vw",
                                marginBottom: "16px",
                                marginTop: "16px",
                                border: "1px solid",
                                padding: "16px",
                                borderRadius: "8px",
                              }}
                            >
                              <img src={image.dataURL} alt="" width="100%" />
                              <div className="image-item__btn-wrapper">
                                <Button
                                  variant="outlined"
                                  startIcon={<ChangeCircleOutlinedIcon />}
                                  onClick={() => onImageUpdate(index)}
                                >
                                  Thay đổi
                                </Button>
                                <Button
                                  variant="outlined"
                                  startIcon={<DeleteOutlineOutlinedIcon />}
                                  sx={{ ml: 2 }}
                                  onClick={() => onImageRemove(index)}
                                >
                                  Xóa
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                  </Box>
                </Card>
              ) : null}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCloseFormCreatePost}>
            Create
          </Button>
          <Button variant="outlined" onClick={handleCloseFormCreatePost}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer
        autoClose={2000}
        style={{ marginTop: "50px", width: "350px" }}
      />
      <Footer />
    </Container>
  );
};

export default DogExchangePage;
