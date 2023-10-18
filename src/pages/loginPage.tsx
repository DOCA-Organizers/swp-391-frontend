import { Box } from "@mui/material";
import Header from "components/header/header";
import Login from "components/login";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <Box height={"100%"}>
      <Header />
      <Login />
    </Box>
  );
};

export default LoginPage;
