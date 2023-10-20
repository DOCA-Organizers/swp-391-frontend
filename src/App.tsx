import { CssBaseline } from "@mui/material";
import Login from "components/login";
import DocaPage from "pages/docaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from "components/report";
import AdminPage from "pages/admin/adminPage";
import RegistrationPage from "pages/registrationPage";
import LoginPage from "pages/loginPage";
import CategoryPage from "pages/categoryPage";
import ReportPage from "pages/reportPage";

function App() {
  return (
    // <BrowserRouter>
    //   <CssBaseline />
    //   <Routes>
    //     <Route path="/" element={<RegistrationPage />} />
    //     {/* <Route
    //       path={ROUTE_PATH.ADMIN}
    //       element={<AdminRoutes user={} isAllowed={true}/>}
    //     /> */}
    //     <Route path="/registration" element={<Report />} />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ReportPage />} />
        {/* <Route
    path={ROUTE_PATH.ADMIN}
    element={<AdminRoutes user={} isAllowed={true}/>}
  /> */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<DocaPage />} />
        <Route path="/registration" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
