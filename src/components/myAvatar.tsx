import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

type Props = {};

const MyAvatar = (props: Props) => {
  return (
    <Grid>
      <Avatar>
        <img
          src={require("../assets/Huy's logo.png")}
          height={110}
          width={140}
        ></img>
      </Avatar>
      <Typography sx={{ fontWeight: "bold" }}>namnguyen2u3</Typography>
      <Typography sx={{ fontWeight: "bold" }}>Member</Typography>
    </Grid>
  );
};

export default MyAvatar;
