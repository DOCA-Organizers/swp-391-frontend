import CssBaseline from "@mui/material/CssBaseline";
import { ErrorBoundary } from "components/errorboundary/errorBoundary";
import Report from "components/report";
import { USER_KEY } from "constant";
import AdminPage from "pages/admin/adminPage";
import DocaPage from "pages/docaPage";
import LoginPage from "pages/login/loginPage";
import ProfilePage from "pages/profilePage";
import RegistrationPage from "pages/register/registrationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const user = JSON.parse(localStorage.getItem(USER_KEY)!);
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/">
            <Route index element={<ProfilePage />} />
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

            {/* <Route path="bookmarked-list" element={<ProfilePage />} /> */}

            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
          </Route>
          {/* <Route
            path={ROUTE_PATH.ADMIN}
            element={
              <AdminRoutes
                user={user}
                isAllowed={user.role.id === 1 ? true : false}
              />
            }
          /> */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<DocaPage />} />
          <Route path="/registration" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
