import { CssBaseline } from "@mui/material";
import Header from "../src/components/header/header";
import Login from "components/login";
import Registration from "components/registration";
import { ROUTE_PATH } from "configs";
import DocaPage from "pages/docaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from "routes/AdminRoutes";
import RegistrationPage from "pages/registrationPage";
import CategoryPage from "pages/categoryPage";
import Report from "components/report";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        {/* <Route
          path={ROUTE_PATH.ADMIN}
          element={<AdminRoutes user={} isAllowed={true}/>}
        /> */}
        <Route path="/registration" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
