import { Grid } from "@mui/material";
import { PostComponent } from "interfaces/post/postResponse";
import { useState } from "react";

const postPage = () => {
  const [postShow, setPostShow] = useState<PostComponent[]>([]);
  return (
    <Grid container spacing={3}>
      {postShow.map((postShow) => (
        <Grid key={postShow.id} xs={12} sm={6} md={3}>
          {/* <Posts posts={postShow} /> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default postPage;
