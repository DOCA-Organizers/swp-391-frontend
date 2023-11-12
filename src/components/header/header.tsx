import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MyAvatar from "components/myAvatar";
import { ROLE_ID_KEY, USER_ID_KEY, USER_KEY } from "constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const buttonStyles = {
  borderRadius: "32px",
  fontWeight: "bolder",
  width: "100px",
};
const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const userObj = JSON.parse(localStorage.getItem(USER_KEY)!);
  const handleLogout = () => {
    localStorage.removeItem(USER_ID_KEY);
    localStorage.removeItem(ROLE_ID_KEY);
    localStorage.removeItem(USER_KEY);
    navigate(0);
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="4px solid"
      borderColor="#1D5B9D"
    >
      <Grid xs={4} alignContent="center" pl={2}>
        <img
          src={require("../../assets/Huy's logo.png")}
          height={110}
          width={140}
        />
      </Grid>
      {userObj ? (
        <Grid xs={2} container justifyContent="end">
          <Stack direction="row" spacing={2}>
            <Typography noWrap lineHeight="50px">
              {userObj.user.fullName}
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
                <Avatar src={require("../../assets/man.png")}></Avatar>
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
                <Avatar /> Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Grid>
      ) : (
        <Grid xs={4} textAlign="end" pr={2}>
          <Button
            variant="contained"
            sx={{ marginRight: "8px", backgroundColor: "#1D5B9D" }}
            style={buttonStyles}
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            style={buttonStyles}
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign Up
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
