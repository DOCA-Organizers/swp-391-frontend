import { Avatar, Box } from "@mui/material";
import { useEffect } from "react";
import postAPI from "service/post/postAPI";

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

const styled = {
  color: "black",
  borderRadius: "10px",
  fontWeight: "bold",
  backgroundColor: "#F0F0F0",
  padding: "8px",
  width: "1400px",
  height: 100,
};
const Posts = () => {
  useEffect(() => {
    const getMyProfile = async () => {
      const data: any = await postAPI.getPostByCategoryID;
      console.log(data);
    };
    const initUseEffect = async () => {
      await getMyProfile();
    };
    initUseEffect();
  });
  return (
    <Box sx={styled}>
      <Avatar sx={{ marginLeft: 10, height: 40, width: 40 }}>
        <img src={require("../assets/Huy's logo.png")}></img>
      </Avatar>
      <Box></Box>
    </Box>
  );
};

export default Posts;
