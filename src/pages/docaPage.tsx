import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Container,
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
  colors,
} from "@mui/material";
import { red } from "@mui/material/colors";
import styled from "@emotion/styled";
import PrimarySearchAppBar from "../components/searchbar/SearchBar";
import Summary from "components/Summary";
import { useEffect, useRef, useState } from "react";
import { ImageListType } from "react-images-uploading";
import SlideBar from "../components/sidebar/Sidebar";
import PostList from "components/post/PostList";
import postAPI from "service/post/postAPI";
import { PostResponse } from "interfaces/post/postResponse";
import { useParams } from "react-router";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Favorite from "@mui/icons-material/Favorite";
import Flag from "@mui/icons-material/Flag";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import SendIcon from "@mui/icons-material/Send";
import { FavoriteBorder } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SubmitHandler, useForm } from "react-hook-form";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import CommentRequest from "interfaces/comment/commentRequest";
import commentAPI from "service/comment/commentAPI";
import { isEmpty } from "lodash";

var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

dayjs.locale("vi");

const DocaPage = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openUpdate, setOpenUpdate] = useState(false);
  const openMore = Boolean(anchorEl);
  const [postList, setPostList] = useState<PostResponse[]>([]);
  const { categoryID } = useParams();
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
      console.log("Response: ", response)
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

      </Grid>
    </Box>
  );
};

export default DocaPage;
