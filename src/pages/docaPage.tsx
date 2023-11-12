import { Box, Container, Grid, Typography, colors } from "@mui/material";
import { red } from "@mui/material/colors";
import styled from "@emotion/styled";
import PrimarySearchAppBar from "../components/searchbar/SearchBar";
import Summary from "components/Summary";
import CreatePost from "components/post/CreatePost";
import { USER_KEY } from "constant";
import { useState } from "react";
import { ImageListType } from "react-images-uploading";
import Post from "../components/post/Post";
import SlideBar from "../components/sidebar/Sidebar";
import PostList from "components/post/PostList";

export interface IState {
  inforPost: {
    content: string;
    categoryPost: string;
    typePet: string;
    breedPet: string;
    imageList: ImageListType;
  }[];
}

const DocaPage = () => {
  const [inforPost, setInforPost] = useState<IState["inforPost"]>([]);
  const user = JSON.parse(localStorage.getItem(USER_KEY)!);
  console.log("user", user.role);
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0",
        paddingTop: "109px",
        paddingLeft: "240px",
      }}
    >
      <SlideBar />
      <Grid container>
        <Grid xs={8} sx={{ margin: "0 auto", padding: "10px 0" }}>
          <CreatePost inforPost={inforPost} setInforPost={setInforPost} />
          <PostList />
        </Grid>
        <Grid xs={4}>
          <Summary />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocaPage;
