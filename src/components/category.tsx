import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const listItemButtonStyles = {
  backgroundColor: "#F0F0F0",
  width: 650,
  position: "relative",
  height: 45,
  border: "3px solid",
  borderColor: "white",
  borderRadius: "16px",
  "&:hover": {
    backgroundColor: "#dbdbdb",
  },
};

const boxStyles = {
  color: "gray",
  borderRadius: "16px",
  fontWeight: "bold",
  backgroundColor: "#FF8C00",
  padding: "8px",
};

const Category = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ backgroundColor: "white", marginTop: "32px" }}>
      <Box sx={boxStyles}>
        {" "}
        <Typography
          sx={{
            fontWeight: "bolder",
            color: "black",
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
              navigate("/dog-chat");
            }}
          >
            Dog Chat
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            sx={listItemButtonStyles}
            onClick={() => {
              navigate("/dog-health-nutrition");
            }}
          >
            Dog Health and Nutrition
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            sx={listItemButtonStyles}
            onClick={() => {
              navigate("/dog-services");
            }}
          >
            Dog Services
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            sx={listItemButtonStyles}
            onClick={() => {
              navigate("/dog-show-events");
            }}
          >
            Dog Show and Events
          </ListItemButton>
        </ListItem>
      </List>
      <Box sx={boxStyles}>
        <Typography
          sx={{
            fontWeight: "bolder",
            color: "black",
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
              navigate("/cat-chat");
            }}
          >
            Cat Chat
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            sx={listItemButtonStyles}
            onClick={() => {
              navigate("/cat-health-nutrition");
            }}
          >
            Cat Health and Nutrition
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            sx={listItemButtonStyles}
            onClick={() => {
              navigate("/cat-services");
            }}
          >
            Cat Services
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            sx={listItemButtonStyles}
            onClick={() => {
              navigate("/cat-show-events");
            }}
          >
            Cat Show and Events
          </ListItemButton>
        </ListItem>
      </List>
    </Container>
  );
};

export default Category;
