import { Grid } from "@mui/material";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Grid
      sx={{
        backgroundColor: "F0F0F0",
        height: 10,
        position: "relative",
        left: 310,
        width: 100,
      }}
    >
      <img
        src={require("../../assets/Huy's logo.png")}
        height={110}
        width={140}
      ></img>
    </Grid>
  );
};

export default Header;
