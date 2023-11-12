import { Box } from "@mui/material";
import Summary from "components/Summary";
import CreatePost from "components/post/CreatePost";
import { USER_KEY } from "constant";
import { useState } from "react";
import { ImageListType } from "react-images-uploading";
import Post from "../components/post/Post";
import SlideBar from "../components/sidebar/Sidebar";

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
      }}
    >
      <SlideBar />
      <Box>
        <Box
          sx={{
            position: "relative",
            left: "70%",
            maxWidth: "60%",
            top: "140px",
          }}
        >
          <Summary />
        </Box>
        <Box
          sx={{
            position: "relative",
            left: "20%",
            maxWidth: "50%",
            bottom: "80px",
          }}
        >
          <CreatePost inforPost={inforPost} setInforPost={setInforPost} />
          <Post inforPost={inforPost} />
        </Box>
      </Box>
    </Box>
  );
};

export default DocaPage;
