import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { CategoryInterface } from "interfaces/categoryInterface";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  backgroundColor: "#FF8C00",
  padding: "8px",
};

const Category = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState<CategoryInterface>();
  const dog1 = 1;
  const dog2 = 2;
  const dog3 = 3;
  const dog4 = 4;
  const cat5 = 5;
  const cat6 = 6;
  const cat7 = 7;
  const cat8 = 8;
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
        <Link
          to={`/dog-chat/${dog1}`}
          state={{ category }}
          style={notUnderline}
        >
          <ListItem>
            <ListItemButton sx={listItemButtonStyles}>Dog Chat</ListItemButton>
          </ListItem>
        </Link>

        <Link
          to={`/dog-chat/${dog2}`}
          state={{ category }}
          style={notUnderline}
        >
          <ListItem>
            <ListItemButton sx={listItemButtonStyles}>
              Dog Health and Nutrition
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          to={`/dog-chat/${dog3}`}
          state={{ category }}
          style={notUnderline}
        >
          <ListItem>
            <ListItemButton sx={listItemButtonStyles}>
              Dog Services
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to={`/dog-chat/${dog4}`}
          state={{ category }}
          style={notUnderline}
        >
          <ListItem>
            <ListItemButton sx={listItemButtonStyles}>
              Dog Show and Events
            </ListItemButton>
          </ListItem>
        </Link>
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
        <Link
          to={`/dog-chat/${cat5}`}
          state={{ category }}
          style={notUnderline}
        >
          <ListItem>
            <ListItemButton sx={listItemButtonStyles}>Cat Chat</ListItemButton>
          </ListItem>
        </Link>
        <Link
          to={`/dog-chat/${cat6}`}
          state={{ category }}
          style={notUnderline}
        >
          <ListItem>
            <ListItemButton sx={listItemButtonStyles}>
              Cat Health and Nutrition
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to={`/dog-chat/${cat7}`}
          state={{ category }}
          style={notUnderline}
        >
          <ListItem>
            <ListItemButton sx={listItemButtonStyles}>
              Cat Services
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to={`/dog-chat/${cat8}`}
          state={{ category }}
          style={notUnderline}
        >
          <ListItem>
            <ListItemButton sx={listItemButtonStyles}>
              Cat Show and Events
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Container>
  );
};

export default Category;
