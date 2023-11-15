import { Container } from "@mui/material";
import Category from "components/category";
import Footer from "components/footer/footer";
import Header from "components/header/header";

const CategoryPage = () => {
  return (
    <Container
      sx={{ backgroundColor: "#F0F0F0" }}
      disableGutters
      maxWidth={false}
    >
      <Header />
      <Category />
      <Footer />
    </Container>
  );
};

export default CategoryPage;
