import { CssBaseline } from "@mui/material";
import { ROUTE_PATH } from "configs";
import DocaPage from "pages/docaPage";
import ProfilePage from "pages/profilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from "routes/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Routes>
        <Route path="/" element={<DocaPage/>}/>
        {/* <Route
          path={ROUTE_PATH.ADMIN}
          element={<AdminRoutes user={} isAllowed={true}/>}
        /> */}
        <Route path="my_profile"
             element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
