import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
  Button,
  Stack,
  Pagination,
} from "@mui/material";
import SlideBar from "components/sidebar/Sidebar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "components/footer/footer";
const DogExchangePage = () => {
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
              Dog Exchange
            </Typography>
          </Breadcrumbs>
          <Typography mt={2} variant="h4" color="#1d5b9d" fontWeight="bolder">
            Dog Exchange
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            height: "800px",
            width: "100%",
            color: "#f0f0f0",
            padding: "16px 32px",
          }}
        >
          <Grid xs={10}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              height="65px"
              p={2}
            >
              <Button variant="text" sx={{ backgroundColor: "white" }}>
                Most recent
              </Button>
              <Stack spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded" />
              </Stack>
            </Grid>
          </Grid>
          <Grid xs={2} bgcolor="blue"></Grid>
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
};

export default DogExchangePage;
