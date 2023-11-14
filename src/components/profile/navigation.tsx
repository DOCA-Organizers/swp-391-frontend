import ArticleIcon from "@mui/icons-material/Article";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@mui/material";
import React from "react";

const Navigation = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Container>
      <BottomNavigation
        sx={{
          backgroundColor: "#F9B572",
          position: "relative",
          right: 125,
          top: 10,
          width: 1400,
          borderRadius: 4,
        }}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<DynamicFeedOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<ArticleIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<BookmarkAddIcon />}
        />
      </BottomNavigation>
    </Container>
  );
};

export default Navigation;
