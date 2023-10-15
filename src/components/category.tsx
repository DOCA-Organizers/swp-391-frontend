import { Home, Padding } from "@mui/icons-material";
import {
  Box,
  BoxProps,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";

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
  backgroundColor: "#F0F0F0",
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
      <Box>
        <Box
          sx={{
            "& > *": {
              minWidth: 130,
              flexBasis: 800,
              minHeight: 100,
              paddingLeft: 20,
              paddingTop: 1,
              paddingBottom: 1,
            },
          }}
        >
          <img
            src={require("../assets/Huy's logo.png")}
            height={100}
            width={100}
          ></img>
        </Box>
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
          }}
        >
          {(["md"] as const).map((size) => (
            <div key={size}>
              <MyComponent>Dog Forums</MyComponent>
              <div style={{ width: "100%" }}>
                <List style={{ border: 0.5 }}>
                  <ListItem>
                    <ListItemButton>Dog Chat</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Dog Health and Nutrition</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Dog Services</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Dog Show and Events</ListItemButton>
                  </ListItem>
                </List>
              </div>
              <MyComponent>Cat Forums</MyComponent>
              <div style={{ width: "100%" }}>
                <List>
                  <ListItem>
                    <ListItemButton>Cat Chat</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Cat Health and Nutrition</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Cat Services</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Cat Show and Events</ListItemButton>
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
