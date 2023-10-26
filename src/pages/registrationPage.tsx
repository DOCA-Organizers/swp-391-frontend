import { Box } from "@mui/material";
import Header from "components/header/header";
import Logo from "components/header/logo";
import RegistrationForm from "components/registrationForm";

const RegistrationPage = () => {
  return (
    <Box>
      <Logo />
      <RegistrationForm />
    </Box>
  );
};

export default RegistrationPage;
