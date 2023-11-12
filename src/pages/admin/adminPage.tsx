import { Box, Container } from "@mui/material";
import FigureShowing from "components/figureShowing";
import ReportList from "components/list/reportList";
import SlideBar from "components/sidebar/Sidebar";

const AdminPage = () => {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box>
        <SlideBar />
      </Box>
      <Box sx={{ marginTop: 20, marginLeft: 40 }}>
        <FigureShowing />
        <ReportList />
      </Box>
    </Container>
  );
};

export default AdminPage;
