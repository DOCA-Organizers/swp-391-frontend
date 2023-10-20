import { Grid } from "@mui/material";
import React from "react";

type Props = {};

const boxStyle = {
  width: 200,
  height: 100,
  margin: "0 auto",
  paddingRight: 750,
};

const Header = (props: Props) => {
  return (
    <Grid style={boxStyle}>
      <img
        src={require("../../assets/Huy's logo.png")}
        height={110}
        width={140}
      />
    </Grid>
  );
};

export default Header;
