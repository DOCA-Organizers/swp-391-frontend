import { Box } from "@mui/material";
import ReportList from "components/list/reportList";
import { useState } from "react";
import { ImageListType } from "react-images-uploading";
import SlideBar from "../components/sidebar/Sidebar";

export interface IState {
  inforPost: {
    content: string;
    categoryPost: string;
    typePet: string;
    breedPet: string;
    imageList: ImageListType;
  }[];
}

const ReportListPage = () => {
  const [inforPost, setInforPost] = useState<IState["inforPost"]>([]);
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0",
        height: 720,
      }}
    >
      <SlideBar />
      <Box>
        <Box
          sx={{
            position: "relative",
            left: "20%",
            maxWidth: "60%",
            top: "140px",
          }}
        >
          <ReportList />
        </Box>
      </Box>
    </Box>
  );
};

export default ReportListPage;
