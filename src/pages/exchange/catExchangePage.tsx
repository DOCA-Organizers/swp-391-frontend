import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import SlideBar from "components/sidebar/Sidebar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "components/footer/footer";

const CatExchangePage = () => {
  const navigate = useNavigate();
  const { categoryID } = useParams();
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ backgroundColor: "#f0f3f5" }}
    >
      <SlideBar />
      <Box sx={{ paddingTop: "109px" }}>
        <Box
          sx={{ height: "150px", backgroundColor: "white", padding: "36px" }}
        >
          <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon />}>
            <Link
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "19px",
                cursor: "pointer",
              }}
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              <HomeIcon sx={{ mr: 1 }} fontSize="medium" />
              Home
            </Link>
            {categoryID === "10" ? (
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "19px",
                  fontWeight: "bolder",
                  color: "#1d5b9d",
                }}
              >
                <CurrencyExchangeIcon sx={{ mr: 1 }} fontSize="medium" />
                Cat Exchange
              </Typography>
            ) : null}
          </Breadcrumbs>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

export default CatExchangePage;
