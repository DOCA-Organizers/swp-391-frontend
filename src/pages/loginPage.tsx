import { Box } from "@mui/material";
import Header from "components/header/header";
import Login from "components/login";
// import AuthContext from "context/AuthContext";

const LoginPage = () => {
  return (
    <Box height={"100%"}>
      <Header />
      <Login />
    </Box>
  );
};

export default LoginPage;
