import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "GlobalStyles";
import { ErrorBoundary } from "components/errorboundary/errorBoundary";
import { ROUTE_PATH } from "configs";
import { ROLE_ID_KEY, USER_FULLNAME_KEY, USER_TOKEN_KEY } from "constant";
import CategoryPage from "pages/categoryPage";
import DocaPage from "pages/docaPage";
import NotFoundPage from "pages/error/NotFoundPage";
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

          {/* <Route path="/1">
            <Route index element={<CategoryPage />} />
            <Route path="dog-chat/:categoryID" element={<DocaPage />} />
            <Route
              path="dog-chat/:categoryID/my_profile/"
              element={<ProfilePage />}
            />

            <Route
              path="dog-health-nutrition/:categoryID"
              element={<DocaPage />}
            />
            <Route
              path="dog-health-nutrition/my_profile/"
              element={<ProfilePage />}
            />

            <Route path="dog-services/:categoryID" element={<DocaPage />} />
            <Route path="dog-services/my_profile/" element={<ProfilePage />} />

            <Route path="dog-show-events/:categoryID" element={<DocaPage />} />
            <Route
              path="dog-show-events/my_profile"
              element={<ProfilePage />}
            />

            <Route path="cat-chat/:categoryID" element={<DocaPage />} />
            <Route path="cat-chat/my_profile" element={<ProfilePage />} />

            <Route
              path="cat-health-nutrition/:categoryID"
              element={<DocaPage />}
            />
            <Route
              path="cat-health-nutrition/my_profile"
              element={<ProfilePage />}
            />

            <Route path="cat-services/:categoryID" element={<DocaPage />} />
            <Route path="cat-services/my_profile" element={<ProfilePage />} />

            <Route path="cat-show-events/:categoryID" element={<DocaPage />} />
            <Route
              path="cat-show-events/my_profile"
              element={<ProfilePage />}
            />

            <Route path="bookmarked-list" element={<ProfilePage />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
          </Route> */}

          <Route path={ROUTE_PATH.ADMIN} element={<AdminRoutes />} />
          <Route path={ROUTE_PATH.MEMBER} element={<MemberRoutes />} />
          <Route path={ROUTE_PATH.STAFF} element={<StaffRoutes />} />
          {/* <Route
            path={ROUTE_PATH.MEMBER}
            element={
              <MemberRoutes
                token={token}
                isAllowed={userRoleID === 5 ? true : false}
              />
            }
          /> */}
          {/* <Route
            path={ROUTE_PATH.STAFF}
            element={
              <StaffRoutes
                token={token}
                isAllowed={userRoleID === 1 ? true : false}
              />
            }
          /> */}
          <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
          <Route path={ROUTE_PATH.ERROR} element={<NotFoundPage />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
