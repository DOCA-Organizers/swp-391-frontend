import { Home, Padding } from "@mui/icons-material";
import {
  Box,
  BoxProps,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";

const MyComponent = styled("div")({
  color: "gray",
  backgroundColor: "#FF8C00",
  padding: 8,
  borderRadius: 4,
});

const divStyle = {
  backgroundColor: "white",
};

const Category = () => {
  return (
    <div style={divStyle}>
      <Box sx={{ position: "relative", top: 30 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            "& > *": { minWidth: 0, flexBasis: 700 },
            borderTop: "4px solid",
            borderColor: "#1D5B9D",
            paddingTop: 3,
          }}
        >
          {(["md"] as const).map((size) => (
            <div key={size}>
              <MyComponent
                sx={{
                  borderRadius: "10px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Dog Forums
              </MyComponent>
              <div style={{ width: "100%" }}>
                <List>
                  <ListItem
                    sx={{
                      backgroundColor: "#F0F0F0",
                      width: 650,
                      position: "relative",
                      left: 20,
                      height: 45,
                      border: "3px solid",
                      borderColor: "white",
                      borderRadius: "20px",
                    }}
                  >
                    <NavLink
                      to="dog-chat"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <ListItemButton>Dog Chat</ListItemButton>
                    </NavLink>
                  </ListItem>

                  <ListItem
                    sx={{
                      backgroundColor: "#F0F0F0",
                      width: 650,
                      position: "relative",
                      left: 20,
                      height: 45,
                      border: "3px solid",
                      borderColor: "white",
                      borderRadius: "15px",
                    }}
                  >
                    <NavLink
                      to="dog-health-nutrition"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                      end
                    >
                      <ListItemButton>Dog Health and Nutrition</ListItemButton>
                    </NavLink>
                  </ListItem>

                  <ListItem
                    sx={{
                      backgroundColor: "#F0F0F0",
                      width: 650,
                      position: "relative",
                      left: 20,
                      height: 45,
                      border: "3px solid",
                      borderColor: "white",
                      borderRadius: "15px",
                    }}
                  >
                    <NavLink
                      to="dog-services"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                      end
                    >
                      <ListItemButton>Dog Services</ListItemButton>
                    </NavLink>
                  </ListItem>

                  <ListItem
                    sx={{
                      backgroundColor: "#F0F0F0",
                      width: 650,
                      position: "relative",
                      left: 20,
                      height: 45,
                      border: "3px solid",
                      borderColor: "white",
                      borderRadius: "20px",
                    }}
                  >
                    <NavLink
                      to="dog-show-events"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <ListItemButton>Dog Show and Events</ListItemButton>
                    </NavLink>
                  </ListItem>
                </List>
              </div>
              <MyComponent
                sx={{
                  borderRadius: "10px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Cat Forums
              </MyComponent>
              <div style={{ width: "100%" }}>
                <List>
                  <ListItem
                    sx={{
                      backgroundColor: "#F0F0F0",
                      width: 650,
                      position: "relative",
                      left: 20,
                      height: 45,
                      border: "3px solid",
                      borderColor: "white",
                      borderRadius: "20px",
                    }}
                  >
                    <NavLink
                      to="cat-chat"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <ListItemButton>Cat Chat</ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem
                    sx={{
                      backgroundColor: "#F0F0F0",
                      width: 650,
                      position: "relative",
                      left: 20,
                      height: 45,
                      border: "3px solid",
                      borderColor: "white",
                      borderRadius: "20px",
                    }}
                  >
                    <NavLink
                      to="cat-health-nutrition"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <ListItemButton>Cat Health and Nutrition</ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem
                    sx={{
                      backgroundColor: "#F0F0F0",
                      width: 650,
                      position: "relative",
                      left: 20,
                      height: 45,
                      border: "3px solid",
                      borderColor: "white",
                      borderRadius: "20px",
                    }}
                  >
                    <NavLink
                      to="cat-services"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <ListItemButton>Cat Services</ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem
                    sx={{
                      backgroundColor: "#F0F0F0",
                      width: 650,
                      position: "relative",
                      left: 20,
                      height: 45,
                      border: "3px solid",
                      borderColor: "white",
                      borderRadius: "20px",
                    }}
                  >
                    <NavLink
                      to="cat-show-events"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <ListItemButton>Cat Show and Events</ListItemButton>
                    </NavLink>
                  </ListItem>
                </List>
              </div>
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Category;
