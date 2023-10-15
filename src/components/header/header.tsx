import { Grid } from "@mui/material";
import React from "react";

type Props = {};

const header = (props: Props) => {
  return (
    <Grid>
      <img
        src={require("../assets/Huy's logo.png")}
        height={110}
        width={140}
      ></img>
    </Grid>
  );
};

export default header;
