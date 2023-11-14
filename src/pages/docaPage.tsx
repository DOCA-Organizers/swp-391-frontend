import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostResponse } from "interfaces/post/postResponse";
import { useParams } from "react-router";
import SlideBar from "../components/sidebar/Sidebar";
import postAPI from "service/post/postAPI";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import Footer from "components/footer/footer";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

dayjs.locale("vi");

const DocaPage = () => {
  const [postList, setPostList] = useState<PostResponse[]>([]);
  const { categoryID } = useParams();
  const navigate = useNavigate();

  function handleClickChangeBreadcrumbs(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  useEffect(() => {
    const getPostByCategoryID = async (categoryID: number) => {
      const response: any = await postAPI.getPostByCategoryID(categoryID);
      console.log("Response: ", response);
      if (response && response.length > 0) {
        setPostList(response);
      }
    };

    const initUseEffect = async () => {
      if (categoryID) {
        const parseCategoryToNumber = parseInt(categoryID);
        await getPostByCategoryID(parseCategoryToNumber);
      }
    };
    initUseEffect();
  }, []);

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
            {categoryID === "1" ? (
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "19px",
                  fontWeight: "bolder",
                  color: "#1d5b9d",
                }}
              >
                <PetsIcon sx={{ mr: 1 }} fontSize="medium" />
                Dog Chat
              </Typography>
            ) : categoryID === "2" ? (
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "19px",
                  fontWeight: "bolder",
                  color: "#1d5b9d",
                }}
              >
                <HealthAndSafetyIcon sx={{ mr: 1 }} fontSize="medium" />
                Dog Health and Nutrition
              </Typography>
            ) : categoryID === "3" ? (
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "19px",
                  fontWeight: "bolder",
                  color: "#1d5b9d",
                }}
              >
                <MiscellaneousServicesIcon sx={{ mr: 1 }} fontSize="medium" />
                Dog Services
              </Typography>
            ) : categoryID === "4" ? (
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "19px",
                  fontWeight: "bolder",
                  color: "#1d5b9d",
                }}
              >
                <EmojiEventsIcon sx={{ mr: 1 }} fontSize="medium" />
                Dog Show and Events
              </Typography>
            ) : categoryID === "5" ? (
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "19px",
                  fontWeight: "bolder",
                  color: "#1d5b9d",
                }}
              >
                <PetsIcon sx={{ mr: 1 }} fontSize="medium" />
                Cat Chat
              </Typography>
            ) : categoryID === "6" ? (
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "19px",
                  fontWeight: "bolder",
                  color: "#1d5b9d",
                }}
              >
                <HealthAndSafetyIcon sx={{ mr: 1 }} fontSize="medium" />
                Cat Health and Nutrition
              </Typography>
            ) : categoryID === "7" ? (
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "19px",
                  fontWeight: "bolder",
                  color: "#1d5b9d",
                }}
              >
                <LocalLibraryIcon sx={{ mr: 1 }} fontSize="medium" />
                Cat Training and Behaviour
              </Typography>
            ) : categoryID === "8" ? (
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "19px",
                  fontWeight: "bolder",
                  color: "#1d5b9d",
                }}
              >
                <EmojiEventsIcon sx={{ mr: 1 }} fontSize="medium" />
                Dog Services
              </Typography>
            ) : null}
          </Breadcrumbs>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

export default DocaPage;
