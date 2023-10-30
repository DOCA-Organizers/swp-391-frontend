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
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { ImageListType } from "react-images-uploading";
import { IState as IProps } from "pages/docaPage";

export default function Post({ inforPost }: IProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");

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
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="namnguyen2u3"
            subheader="September 14, 2023"
          />
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
          <ImageList sx={{ width: 650, height: 450 }} cols={1} rowHeight={"auto"}>
            {post.imageList.map((image) => (
              <ImageListItem sx={{border: "15px solid white"}}>
                <img
                  srcSet={`${image.dataURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={image['data_url']} alt="" width= "500" height= "500"
                  loading="lazy"
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
            onClose={handleCloseCommentDialog}
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
                {[...new Array(50)].map((index) => "Comments").join("\n")}
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
      );
    });
  };

  const handleClickOpenCommentDialog =
    (scrollType: DialogProps["scroll"]) => () => {
      setOpen(true);
      setScroll(scrollType);
    };

  const handleCloseCommentDialog = () => {
    setOpen(false);
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

  return (
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
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="namnguyen2u3"
          subheader="September 14, 2023"
        />
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
          onClose={handleCloseCommentDialog}
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
              {[...new Array(50)].map((index) => {
                
              }).join("\n")}
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
  );
}
