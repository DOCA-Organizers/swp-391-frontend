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
import { useState } from "react";
import { ImageListType } from "react-images-uploading";

export interface IState{
  inforPost: {
    content: string,
    categoryPost: string,
    typePet: string,
    breedPet: string,
    imageList: ImageListType
  }[]
}



const DocaPage = () => {
  const [inforPost, setInforPost] = useState<IState["inforPost"]>([]);
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0",
        paddingTop: "140px",
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
          <CreatePost inforPost={inforPost} setInforPost={setInforPost}/>
          <Post inforPost={inforPost}/>
        </Box>
        <Box
          sx={{
            position: "relative",
            left: "70%",
            maxWidth: "30%",
            bottom: "1050px",
          }}
        >
          <Summary />
        </Box>
      </Box>
    </Box>
  );
};

export default DocaPage;
