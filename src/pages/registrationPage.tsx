import { Box, Grid, Stack } from "@mui/material";
import Header from "components/header/header";
import Registration from "components/registration";
import React from "react";

type Props = {};

const RegistrationPage = (props: Props) => {
  return (
    <Box>
      <Header />
      <Registration />
    </Box>
  );
};

export default RegistrationPage;
