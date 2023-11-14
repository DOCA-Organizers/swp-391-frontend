import { Box, Container } from "@mui/material";
import FigureShowing from "components/figureShowing";
import ReportList from "components/list/reportList";
import StaffSideBar from "components/staff/staffSideBar";

const StaffPage = () => {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box>
        <StaffSideBar />
      </Box>
      <Box sx={{ marginTop: 20, marginLeft: 40 }}>
        <FigureShowing />
        <ReportList />
      </Box>
    </Container>
  );
};

export default StaffPage;
