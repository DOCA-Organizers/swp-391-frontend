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
            <Route index element={<AdminPage />} />
            <Route path="dog-chat/1" element={<DocaPage />} />
            <Route path="dog-chat/my_profile/" element={<ProfilePage />} />

            <Route path="dog-health-nutrition/2" element={<DocaPage />} />
            <Route
              path="dog-health-nutrition/my_profile/"
              element={<ProfilePage />}
            />

            <Route path="dog-services/3" element={<DocaPage />} />
            <Route path="dog-services/my_profile/" element={<ProfilePage />} />

            <Route path="dog-show-events/4" element={<DocaPage />} />
            <Route
              path="dog-show-events/my_profile"
              element={<ProfilePage />}
            />

            <Route path="cat-chat/5" element={<DocaPage />} />
            <Route path="cat-chat/my_profile" element={<ProfilePage />} />

            <Route path="cat-health-nutrition/6" element={<DocaPage />} />
            <Route
              path="cat-health-nutrition/my_profile"
              element={<ProfilePage />}
            />

            <Route path="cat-services/7" element={<DocaPage />} />
            <Route path="cat-services/my_profile" element={<ProfilePage />} />

            <Route path="cat-show-events/8" element={<DocaPage />} />
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
          <Route path="/user" element={<DocaPage />} />
          <Route path="/registration" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
