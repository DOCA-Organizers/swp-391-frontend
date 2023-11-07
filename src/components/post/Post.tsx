import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { FavoriteBorder } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import Flag from "@mui/icons-material/Flag";
import Badge from "@mui/material/Badge";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Grid,
  ImageList,
  ImageListItem,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { ImageListType } from "react-images-uploading";
import { IState as IProps } from "pages/docaPage";
import Menu from "@mui/material/Menu";
import { NavLink, Route } from "react-router-dom";
import { Nav } from "reactstrap";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface Comment {
  id: string;
  content: string;
  createTime: Date;
  private: boolean;
  active: boolean;
}

export default function Post({ inforPost }: IProps) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const openMore = Boolean(anchorEl);
  const [comment, setComment] = React.useState<Comment[]>([]);
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

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  // const handleSendComment = ()  => {
  //   console.log("send");
  // }

  // const handleWriteComment = (e:any) => {
  //     console.log(e.target.value);
  // }
  var commentList = [
    {
      id: "1",
      content: "This is a cute pet",
      createTime: "2023-10-18",
      private: "false",
      active: "true",
      username: "Siuuuu",
      avatar: require("../../assets/dog.png")
    },
    {
      id: "2",
      content: "Can I meet him?",
      createTime: "2023-10-18",
      private: "false",
      active: "true",
      username: "BoyCute2k3",
      avatar: require("../../assets/panda.png")
    },
    {
      id: "3",
      content: "Your hair is so cool",
      createTime: "2023-10-19",
      private: "false",
      active: "true",
      username: "UyLe",
      avatar: require("../../assets/cool.png")
    },
    {
      id: "4",
      content: "That dog has such beautiful eyes",
      createTime: "2023-10-20",
      private: "false",
      active: "true",
      username: "NhiVo",
      avatar: require("../../assets/girl.png")
    },
  ];

  const renderPostList = (): JSX.Element[] => {
    return inforPost.map((post) => {
      return (
        <Card
          sx={{
            maxWidth: 650,
            maxHeight: "auto",
            backgroundColor: "white",
            borderRadius: "20px",
            marginBottom: 2,
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
            subheader="September 14, 2023"
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
                backgroundColor: "#FF8C00",
                width: "150px",
                color: "#1D5B9D",
              }}
            >
              <Typography marginLeft={1}>
                Category: {post.categoryPost}
              </Typography>
            </Card>
            <Card
              sx={{
                marginBottom: 1,
                backgroundColor: "#FF8C00",
                width: "150px",
                color: "#1D5B9D",
              }}
            >
              <Typography marginLeft={1}>Type: {post.typePet}</Typography>
            </Card>
            <Card
              sx={{
                marginBottom: 1,
                backgroundColor: "#FF8C00",
                width: "150px",
                color: "#1D5B9D",
              }}
            >
              <Typography marginLeft={1}>Breed: {post.breedPet}</Typography>
            </Card>
            <Typography variant="h6" color="#000000">
              {post.content}
            </Typography>
          </CardContent>
          <ImageList
            sx={{ width: 650, height: 450 }}
            cols={1}
            rowHeight={"auto"}
          >
            {post.imageList.map((image) => (
              <ImageListItem sx={{ border: "10px solid white" }}>
                <img
                  srcSet={`${image.dataURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={image["data_url"]}
                  alt=""
                  width="800"
                  height="800"
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
            <Badge
              badgeContent={15}
              color="primary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Checkbox
                aria-label="like"
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                sx={{ padding: 0.5 }}
              />
            </Badge>

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
                        ></Avatar>
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
                          sx={{ display: "flex", justifyContent: "flex-start"}}
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
                            <Typography sx={{ marginLeft: "40px", marginTop: "4px" }} fontSize={16}>
                              Reply
                            </Typography>
                          {/* </Button> */}
                        </Box>
                        <Typography sx={{fontSize: "10px"}} fontWeight={1000}>{comments.createTime}</Typography>
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
              </Grid>
            </DialogActions>
          </Dialog>
          <BootstrapDialog
            onClose={handleCloseUpdate}
            aria-labelledby="customized-dialog-title"
            open={openUpdate}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Post of namnguyen2u3
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleCloseUpdate}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <TextField
                className="inputContent"
                placeholder="Hello, What's on your mind"
                id="content-post"
                value={post.content}
                required={true}
                multiline
              />
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleCloseUpdate}>
                Save changes
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </Card>
      );
    });
  };

  return (
    <>
      <div>
        <Card
          sx={{
            maxWidth: 650,
            maxHeight: "auto",
            backgroundColor: "white",
            borderRadius: "20px",
            marginBottom: 2,
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
            subheader="September 14, 2023"
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
                backgroundColor: "#FF8C00",
                width: "150px",
                color: "#1D5B9D",
              }}
            >
              <Typography marginLeft={1}>Category: Post</Typography>
            </Card>
            <Card
              sx={{
                marginBottom: 1,
                backgroundColor: "#FF8C00",
                width: "150px",
                color: "#1D5B9D",
              }}
            >
              <Typography marginLeft={1}>Type: Dog</Typography>
            </Card>
            <Card
              sx={{
                marginBottom: 1,
                backgroundColor: "#FF8C00",
                width: "150px",
                color: "#1D5B9D",
              }}
            >
              <Typography marginLeft={1}>Breed: Poodle</Typography>
            </Card>
            <Typography variant="h6" color="#000000">
              Sunny day . . . Hypotizing photoshoot with my favours. Have a gud
              day !!!
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="500"
            image="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
            alt="My Pet"
          />

          <CardActions
            sx={{
              justifyContent: "space-between",
              borderTop: "2px solid #1D5B9D",
              borderRadius: "15px",
              paddingBottom: 1,
            }}
          >
            <Badge
              badgeContent={15}
              color="primary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Checkbox
                aria-label="like"
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                sx={{ padding: 0.5 }}
              />
            </Badge>

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
                {[...new Array()].map((index) => {}).join("\n")}
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
              </Grid>
            </DialogActions>
          </Dialog>
        </Card>
        {renderPostList()}
      </div>
    </>
  );
}
