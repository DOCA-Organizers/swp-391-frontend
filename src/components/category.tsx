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

const notUnderline = { textDecoration: "none", color: "black" };

const boxStyles = {
  color: "gray",
  borderRadius: "16px",
  fontWeight: "bold",
  backgroundColor: "#3876BF",
  padding: "8px",
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
        navigate(`cat-services/${num}`);
        break;
      case 8:
        num = 8;
        navigate(`cat-show-events/${num}`);
        break;
    }
  };
  return (
    <Container sx={{ backgroundColor: "white", marginTop: "32px" }}>
      <Box sx={boxStyles}>
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
            onClick={() => {
              handleNavigate(1);
            }}
            sx={listItemButtonStyles}
          >
            Dog Chat
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            onClick={() => {
              handleNavigate(2);
            }}
            sx={listItemButtonStyles}
          >
            Dog Health and Nutrition
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            onClick={() => {
              handleNavigate(3);
            }}
            sx={listItemButtonStyles}
          >
            Dog Services
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            onClick={() => {
              handleNavigate(4);
            }}
            sx={listItemButtonStyles}
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
            onClick={() => {
              handleNavigate(5);
            }}
            sx={listItemButtonStyles}
          >
            Cat Chat
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            onClick={() => {
              handleNavigate(6);
            }}
            sx={listItemButtonStyles}
          >
            Cat Health and Nutrition
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            onClick={() => {
              handleNavigate(7);
            }}
            sx={listItemButtonStyles}
          >
            Cat Services
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            onClick={() => {
              handleNavigate(8);
            }}
            sx={listItemButtonStyles}
          >
            Cat Show and Events
          </ListItemButton>
        </ListItem>
      </List>
    </Container>
  );
};

export default Category;
