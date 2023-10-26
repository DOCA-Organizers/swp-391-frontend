import { Box } from "@mui/material";
import Header from "components/header/header";
import Logo from "components/header/logo";
import Login from "components/login";
// import AuthContext from "context/AuthContext";

const LoginPage = () => {
  return (
    <Box height={"100%"}>
      <Logo />
      <Login />
    </Box>
  );
};

export default LoginPage;
