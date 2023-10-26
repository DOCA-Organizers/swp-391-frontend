import { Box } from "@mui/material";
import Category from "components/category";
import Header from "components/header/header";
import SlideBar from "components/sidebar/Sidebar";
import React from "react";

type Props = {};

const CategoryPage = (props: Props) => {
  return (
    <Box>
      <Header />
      <Category />
    </Box>
  );
};

export default CategoryPage;
