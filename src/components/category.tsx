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

type Props = {};

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D5B9D",
    },
    secondary: {
      main: "#F0F0F0",
    },
  },
});

const divStyle = {
  backgroundColor: "white",
};

const itemImg = {
  img: "D:SWP391DOCA_Projectswp391-frontendsrcassetsHuy's logo.png",
};

const padding = styled("div")({
  paddingLeft: 8,
});

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
              <MyComponent>Dog Forums</MyComponent>
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
                      borderRadius: "10px",
                    }}
                  >
                    <NavLink
                      to="dogChat"
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
                      borderRadius: "10px",
                    }}
                  >
                    <NavLink
                      to="dogHealthAndNutrition"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
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
                      borderRadius: "10px",
                    }}
                  >
                    <NavLink
                      to="dogServices"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
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
                      borderRadius: "10px",
                    }}
                  >
                    <NavLink
                      to="dogShowAndEvents"
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
              <MyComponent sx={{ position: "relative" }}>
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
                      borderRadius: "10px",
                    }}
                  >
                    <NavLink
                      to="catChat"
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
                      borderRadius: "10px",
                    }}
                  >
                    <NavLink
                      to="catHealthAndNutrition"
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
                      borderRadius: "10px",
                    }}
                  >
                    <NavLink
                      to="catServices"
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
                      borderRadius: "10px",
                    }}
                  >
                    <NavLink
                      to="catShowAndEvents"
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
