import { Box, Grid, Typography } from "@mui/material";
import { CountPostAndCommentAllCategory } from "interfaces/count";
import { User } from "interfaces/user/userResponse";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postAPI from "service/post/postAPI";
import userAPI from "service/user/userAPI";

const FigureShowing = () => {
  const [numberPost, setNumberPost] = useState<CountPostAndCommentAllCategory[]>([]);
  const [userList, setUserList] = useState<User[]>([]);
  const styled = {
    justifyContent: "center",
    position: "center",
    backgroundColor: "#336BA6",
    borderRadius: "15px 50px",
    border: "5px solid #1D5B9D",
    width: 5,
    marginRight: "16px"
  };

  useEffect(() => {
    const getNumberPost = async () => {
      const response: any = await postAPI.getNumberPostAndCommentAllCategory();
      if (response.length > 0) {
        setNumberPost(response);
      } 
    };
    const initUseEffect = async () => {
      await getNumberPost();
    };
    initUseEffect();
  }, []);
  console.log("Number Post: ", numberPost);


  let transferNumberPost = numberPost.map(a => a.numberpost);
  // console.log("TransferNumberPost: ", transferNumberPost);

  let TotalPost = 0;


  for (let i = 0; i < transferNumberPost.length; i++ ) {
    TotalPost += transferNumberPost[i];
  }

  useEffect(() => {
    const getUserList = async () => {
      const response: any = await userAPI.getUserList();
      if (response && response.length > 0) {
        setUserList(response);
      } 
    };
    const initUseEffect = async () => {
      await getUserList();
    };
    initUseEffect();
  }, []);

  let TotalUser = userList.length;
   
  return (
    <Box
      sx={{
        marginRight: 6,
        marginLeft: 5,
        borderRadius: 10,
        backgroundColor: "white",
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={3.5} sx={styled}>
          <Typography sx={{ marginBottom: 5, fontWeight: "bold", color: "white"}}>
            Number of Posts: {TotalPost}
          </Typography>
        </Grid>
        <Grid item xs={3.5} sx={styled}>
          <Typography sx={{ marginBottom: 5, fontWeight: "bold", color: "white" }}>
            Number of Reports: 45
          </Typography>
        </Grid>
        <Grid item xs={3.5} sx={styled}>
          <Typography sx={{ marginBottom: 5, fontWeight: "bold", color: "white" }}>
            Number of Accounts: {TotalUser}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FigureShowing;
