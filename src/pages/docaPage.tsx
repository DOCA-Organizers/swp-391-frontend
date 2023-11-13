import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SlideBar from "../components/sidebar/Sidebar";
import postAPI from "service/post/postAPI";
import { PostResponse } from "interfaces/post/postResponse";
import { useParams } from "react-router";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import Footer from "components/footer/footer";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import PetsIcon from "@mui/icons-material/Pets";

var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

dayjs.locale("vi");

const DocaPage = () => {
  const [postList, setPostList] = useState<PostResponse[]>([]);
  const { categoryID } = useParams();

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
      if (response.length > 0) {
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
          <div role="presentation" onClick={handleClickChangeBreadcrumbs}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "19px",
                }}
                color="inherit"
                href="/a"
              >
                <HomeIcon sx={{ mr: 1}} fontSize="medium" />
                Home
              </Link>
              {categoryID === "1" ? (
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "19px",
                    fontWeight: "bolder",
                  }}
                >
                  <PetsIcon sx={{ mr: 1 }} fontSize="medium" />
                  Dog chat
                </Typography>
              ) : null}
            </Breadcrumbs>
          </div>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

export default DocaPage;
