import { Box, Container } from "@mui/material";
import Category from "components/category";
import Header from "components/header/header";

const CategoryPage = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Header />
      <Category />
    </Container>
  );
};

export default CategoryPage;
