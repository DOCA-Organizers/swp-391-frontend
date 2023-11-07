import { Box, Paper } from "@mui/material";
import RegistrationForm from "components/forms/registrationForm";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BackButton from "components/buttons/backButton";

const paperStyle = {
  width: 600,
  height: 800,
  margin: "0 auto",
};

const RegistrationPage = () => {
  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(25, 118, 210, 0.04)",
      }}
    >
      <Paper elevation={20} style={paperStyle}>
        <Box display="flex" flexDirection="column">
          <BackButton />
          <RegistrationForm />
        </Box>
      </Paper>
    </Grid2>
  );
};

export default RegistrationPage;
