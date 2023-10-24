import { Box, Container, Typography, colors } from "@mui/material";
import { red } from "@mui/material/colors";
import styled from "@emotion/styled";
import Slidebar from "../components/sidebar/Sidebar";
import PrimarySearchAppBar from "../components/searchbar/SearchBar";
import SlideBar from "../components/sidebar/Sidebar";
import Post from "../components/post/Post";
import Summary from "components/Summary";
import { relative } from "path";
import CreatePost from "components/post/CreatePost";

const DocaPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0",
        paddingTop: "150px",
      }}
    >
      <SlideBar />
      <Box>
        <Box
          sx={{
            position: "relative",
            left: "20%",
            maxWidth: "50%",
          }}
        >
          <CreatePost />
          <Post />
        </Box>
        <Box
          sx={{
            position: "relative",
            left: "70%",
            maxWidth: "30%",
            bottom: "1025px",
          }}
        >
          <Summary />
        </Box>
      </Box>
    </Box>
  );
};

export default DocaPage;
