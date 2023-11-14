import { FavoriteBorder } from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Favorite from "@mui/icons-material/Favorite";
import Flag from "@mui/icons-material/Flag";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Summary from "components/Summary";
import CreatePost from "components/post/CreatePost";
import { USER_KEY } from "constant";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { PostResponse } from "interfaces/post/postResponse";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import postAPI from "service/post/postAPI";
import SlideBar from "../components/sidebar/Sidebar";

var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

dayjs.locale("vi");

const DocaPage = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openUpdate, setOpenUpdate] = useState(false);
  const openMore = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem(USER_KEY)!);
  const [postList, setPostList] = useState<PostResponse[]>([]);
  const { categoryID } = useParams();
  const userObj = JSON.parse(localStorage.getItem(USER_KEY)!);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpenCommentDialog =
    (scrollType: DialogProps["scroll"]) => () => {
      setOpen(true);
      setScroll(scrollType);
    };

  const handleCloseCommentDialog = () => {
    setOpen(false);
  };

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  var commentList = [
    {
      id: "1",
      content: "This is a cute pet",
      createTime: "2023-10-18",
      private: "false",
      active: "true",
      username: "Siuuuu",
      avatar: require("../assets/dog.png"),
    },
    {
      id: "2",
      content: "Can I meet him?",
      createTime: "2023-10-18",
      private: "false",
      active: "true",
      username: "BoyCute2k3",
      avatar: require("../assets/panda.png"),
    },
    {
      id: "3",
      content: "Your hair is so cool",
      createTime: "2023-10-19",
      private: "false",
      active: "true",
      username: "UyLe",
      avatar: require("../assets/cool.png"),
    },
    {
      id: "4",
      content: "That dog has such beautiful eyes",
      createTime: "2023-10-20",
      private: "false",
      active: "true",
      username: "NhiVo",
      avatar: require("../assets/girl.png"),
    },
  ];

  useEffect(() => {
    const getPostByCategoryID = async (categoryID: number) => {
      const response: any = await postAPI.getPostByCategoryID(categoryID);
      console.log("Response: ", response);
      if (response.length > 0) {
        setPostList(response);
      }
    };

    const initUseEffect = async () => {
      if (categoryID) {
        const parseCategoryToNumber = parseInt(categoryID);
        await getPostByCategoryID(parseCategoryToNumber);
      }
    };
    initUseEffect();
  }, []);
  console.log(postList);

  // const onSubmit: SubmitHandler<CommentRequest> = async (data: any) => {
  //   try {
  //     const responese: any = await commentAPI.createComment({
  //       userId:  userObj.user.id,
  //       postId:  "",
  //       content: "",
  //     })

  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0",
        paddingTop: "109px",
        paddingLeft: "240px",
      }}
    >
      <SlideBar />
      <Grid container>
        <Grid xs={8} sx={{ margin: "0 auto", padding: "10px 0" }}>
          <CreatePost />
          {postList.map((post) => {
            return (
              <Card
                key={post.id}
                variant="elevation"
                sx={{
                  maxWidth: 650,
                  maxHeight: "auto",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  margin: "0 auto",
                  marginBottom: 1,
                }}
              >
                <CardHeader
                  sx={{ color: "#FF8C00" }}
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="recipe"
                      src="https://cdn-icons-png.flaticon.com/128/706/706807.png"
                    ></Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      id="basic-button"
                      aria-controls={openMore ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openMore ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="namnguyen2u3"
                  subheader={dayjs(post.createTime).format(
                    "DD/MM/YYYY - HH:mm:ss"
                  )}
                />

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMore}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClickOpenUpdate}>Update</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
                <CardContent>
                  <Card
                    sx={{
                      marginBottom: 1,
                      backgroundColor: "yellow",
                      width: "180px",
                      color: "black",
                    }}
                  >
                    <Typography marginLeft={1}>
                      Category: {post.exchange ? "Exchange" : "Post"}
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      marginBottom: 1,
                      backgroundColor: "red",
                      width: "180px",
                      color: "white",
                    }}
                  >
                    <Typography marginLeft={1}>
                      Type: {post.pet_Breed.pet_type}
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      marginBottom: 1,
                      backgroundColor: "blue",
                      width: "180px",
                      color: "white",
                    }}
                  >
                    <Typography marginLeft={1}>
                      Breed: {post.pet_Breed.breedname}
                    </Typography>
                  </Card>
                  <Typography variant="body1" color="#000000">
                    {post.content}
                  </Typography>
                </CardContent>
                <ImageList
                  sx={{ width: 650, height: "auto" }}
                  cols={1}
                  rowHeight="auto"
                >
                  {post.postImgs.map((item) => (
                    <ImageListItem key={item.id}>
                      <img
                        src={item.img}
                        width="1400"
                        height="1000"
                        loading="eager"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>

                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    borderTop: "2px solid #1D5B9D",
                    borderRadius: "15px",
                    paddingBottom: 1,
                  }}
                >
                  {/* <Badge
                  badgeContent={15}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                > */}
                  <Checkbox
                    aria-label="like"
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    sx={{ padding: 0.5 }}
                  />
                  {/* </Badge> */}

                  <IconButton
                    aria-label="comment"
                    onClick={handleClickOpenCommentDialog("paper")}
                  >
                    <ChatBubbleOutlineOutlinedIcon />
                  </IconButton>

                  <Checkbox
                    aria-label="bookmark"
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                  <Checkbox
                    aria-label="report"
                    icon={<FlagOutlinedIcon />}
                    checkedIcon={<Flag />}
                  />
                </CardActions>
                <Dialog
                  open={open}
                  scroll={scroll}
                  aria-labelledby="scroll-dialog-title"
                  aria-describedby="scroll-dialog-description"
                >
                  <DialogTitle
                    id="scroll-dialog-title"
                    justifyContent="space-between"
                    display="flex"
                    fontWeight="bold"
                  >
                    namnguyen2u3's post
                    <IconButton onClick={handleCloseCommentDialog}>
                      <ClearOutlinedIcon />
                    </IconButton>
                  </DialogTitle>
                  <DialogContent dividers={scroll === "paper"}>
                    <DialogContentText
                      id="scroll-dialog-description"
                      ref={descriptionElementRef}
                      tabIndex={-1}
                    >
                      {commentList.map((comments) => {
                        return (
                          <Grid
                            id={comments.id}
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            marginBottom={1}
                          >
                            <Grid item marginRight={2}>
                              <Avatar
                                sx={{ bgcolor: red[500] }}
                                aria-label="recipe"
                                src={comments.avatar}
                              />
                            </Grid>
                            <Grid item>
                              <Card
                                sx={{
                                  borderRadius: "10px",
                                  backgroundColor: "#F0F0F0",
                                }}
                              >
                                <Typography
                                  sx={{ margin: "10px" }}
                                  fontWeight={"bold"}
                                  fontSize={13}
                                >
                                  {comments.username}
                                </Typography>
                                <Typography sx={{ margin: "10px" }}>
                                  {comments.content}
                                </Typography>
                              </Card>

                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <Checkbox
                                  aria-label="like"
                                  icon={<FavoriteBorder />}
                                  checkedIcon={<Favorite />}
                                  sx={{ padding: 0.5 }}
                                />
                                {/* <Button
                                sx={{
                                  textDecoration: "none",
                                  color: "inherit",
                                  width: "100%",
                                }}
                              > */}
                                {/* </Button> */}
                              </Box>
                              <Typography
                                sx={{ fontSize: "10px" }}
                                fontWeight={1000}
                              >
                                {dayjs(comments.createTime).format(
                                  "DD/MM/YYYY - HH:mm:ss"
                                )}
                              </Typography>
                            </Grid>
                          </Grid>
                        );
                      })}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Grid item>
                        <Avatar
                          sx={{ bgcolor: red[500] }}
                          aria-label="recipe"
                          src="https://cdn-icons-png.flaticon.com/128/706/706807.png"
                        ></Avatar>
                      </Grid>
                      {/* <form onSubmit={handleSubmit(onSubmit, onError)}> */}
                      <Grid item>
                        <Box
                          sx={{
                            width: 500,
                            maxWidth: "100%",
                            marginLeft: 2,
                          }}
                        >
                          <TextField
                            fullWidth
                            label="Comment"
                            id="comment"
                            rows={2}
                            maxRows={Infinity}
                            multiline
                            InputProps={{
                              endAdornment: (
                                <IconButton>
                                  <SendIcon color="primary" />
                                </IconButton>
                              ),
                            }}
                          />
                        </Box>
                      </Grid>
                      {/* </form> */}
                    </Grid>
                  </DialogActions>
                </Dialog>
              </Card>
            );
          })}
        </Grid>
        <Grid xs={4}>
          <Summary />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocaPage;
