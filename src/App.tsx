import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "GlobalStyles";
import { ErrorBoundary } from "components/errorboundary/errorBoundary";
import Report from "components/report";
import { USER_KEY } from "constant";
import AdminPage from "pages/admin/adminPage";
import { ROUTE_PATH } from "configs";
import CategoryPage from "pages/categoryPage";
import DocaPage from "pages/docaPage";
import NotFoundPage from "pages/error/NotFoundPage";
import CatExchangePage from "pages/exchange/catExchangePage";
import DogExchangePage from "pages/exchange/dogExchangePage";
import LoginPage from "pages/login/loginPage";
import RegistrationPage from "pages/register/registrationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AdminRoutes from "routes/AdminRoutes";
import MemberRoutes from "routes/MemberRoutes";
import StaffRoutes from "routes/StaffRoutes";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="dog-chat/:categoryID" element={<DocaPage />} />
          <Route
            path="dog-health-nutrition/:categoryID"
            element={<DocaPage />}
          />
          <Route path="dog-services/:categoryID" element={<DocaPage />} />
          <Route path="dog-show-events/:categoryID" element={<DocaPage />} />
          <Route path="cat-chat/:categoryID" element={<DocaPage />} />
          <Route
            path="cat-health-nutrition/:categoryID"
            element={<DocaPage />}
          />
          <Route
            path="cat-training-and-behavior/:categoryID"
            element={<DocaPage />}
          />
          <Route path="cat-show-events/:categoryID" element={<DocaPage />} />
          <Route
            path="exchange-dog/:categoryID"
            element={<DogExchangePage />}
          />
          <Route
            path="exchange-cat/:categoryID"
            element={<CatExchangePage />}
          />
          <Route path={ROUTE_PATH.ADMIN} element={<AdminRoutes />} />
          <Route path={ROUTE_PATH.MEMBER} element={<MemberRoutes />} />
          <Route path={ROUTE_PATH.STAFF} element={<StaffRoutes />} />
          <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
          <Route path={ROUTE_PATH.ERROR} element={<NotFoundPage />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
