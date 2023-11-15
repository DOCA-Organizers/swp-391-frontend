import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  ListItemIcon,
  MenuItem,
  Stack,
  Typography,
  Menu,
  Tooltip,
  Divider,
} from "@mui/material";
import { CountPostAndCommentAllCategory } from "interfaces/count";
import { User } from "interfaces/user/userResponse";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postAPI from "service/post/postAPI";
import userAPI from "service/user/userAPI";
import {
  ROLE_ID_KEY,
  USER_FULLNAME_KEY,
  USER_ID_KEY,
  USER_TOKEN_KEY,
} from "constant";
import { useNavigate } from "react-router-dom";
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';

const FigureShowing = () => {
  const [numberPost, setNumberPost] = useState<
    CountPostAndCommentAllCategory[]
  >([]);
  const [userList, setUserList] = useState<User[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const styled = {
    justifyContent: "center",
    position: "center",
    backgroundColor: "orange",
    borderRadius: "15px 50px",
    border: "3px solid #1D5B9D",
    width: 5,
    marginRight: "16px",
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const userFullName = localStorage.getItem(USER_FULLNAME_KEY);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(USER_FULLNAME_KEY);
    localStorage.removeItem(USER_ID_KEY);
    localStorage.removeItem(ROLE_ID_KEY);
    localStorage.removeItem(USER_TOKEN_KEY);
    setAnchorEl(null);
    navigate(0);
  };

  useEffect(() => {
    const getNumberPost = async () => {
      const response: any = await postAPI.getNumberPostAndCommentAllCategory();
      if (response.length > 0) {
        setNumberPost(response);
      }
    };
    const initUseEffect = async () => {
      await getNumberPost();
    };
    initUseEffect();
  }, []);
  console.log("Number Post: ", numberPost);

  let transferNumberPost = numberPost.map((a) => a.numberpost);
  // console.log("TransferNumberPost: ", transferNumberPost);
  
  let TotalPost = 0;

  for (let i = 0; i < transferNumberPost.length; i++) {
    TotalPost += transferNumberPost[i];
  }

  useEffect(() => {
    const getUserList = async () => {
      const response: any = await userAPI.getUserList();
      if (response && response.length > 0) {
        setUserList(response);
      }
    };
    const initUseEffect = async () => {
      await getUserList();
    };
    initUseEffect();
  }, []);

  let TotalUser = userList.length;

  return (
    <Box
      sx={{
        marginRight: 6,
        marginLeft: 5,
        borderRadius: 5,
        backgroundColor: "#336BA6",
      }}
    >
      <Grid container spacing={3.5}>
        <Grid item xs={2.75} sx={styled}>
          <Typography
            sx={{ marginBottom: 5, fontWeight: "bold", color: "white" }}
          >
            
            Number of Posts: {TotalPost} <PostAddOutlinedIcon />
          </Typography>
        </Grid>
        <Grid item xs={2.75} sx={styled}>
          <Typography
            sx={{ marginBottom: 5, fontWeight: "bold", color: "white" }}
          >
            Number of Reports: 45 <FlagCircleOutlinedIcon/>
          </Typography>
        </Grid>
        <Grid item xs={2.75} sx={styled}>
          <Typography
            sx={{ marginBottom: 5, fontWeight: "bold", color: "white" }}
          >
            Number of Accounts: {TotalUser} <PortraitOutlinedIcon/>
          </Typography>
        </Grid>
        <Grid xs={3} container justifyContent="end">
        <Stack direction="row" spacing={2}>
          <Typography noWrap lineHeight="100px" fontWeight="bold" color="white">
            {userFullName}
          </Typography>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar src={require("../assets/man.png")} />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar src={require("../assets/man.png")}/> Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Stack>
      </Grid>
      </Grid>
      
    </Box>
  );
};

export default FigureShowing;
