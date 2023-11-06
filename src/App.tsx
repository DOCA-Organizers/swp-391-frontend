import CssBaseline from "@mui/material/CssBaseline";
import DocaPage from "pages/docaPage";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Report from "components/report";
import AdminPage from "pages/admin/adminPage";
import RegistrationPage from "pages/register/registrationPage";
import CategoryPage from "pages/categoryPage";
import ProfilePage from "pages/profilePage";
import { ErrorBoundary } from "components/errorboundary/errorBoundary";
import LoginPage from "pages/login/loginPage";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/">
            <Route index element={<CategoryPage />} />
            <Route path="dog-chat" element={<DocaPage />} />
            <Route path="dog-chat/my_profile" element={<ProfilePage />} />

            <Route path="dog-health-nutrition" element={<DocaPage />} />
            <Route
              path="dog-health-nutrition/my_profile"
              element={<ProfilePage />}
            />

            <Route path="dog-services" element={<DocaPage />} />
            <Route path="dog-services/my_profile" element={<ProfilePage />} />

            <Route path="dog-show-events" element={<DocaPage />} />
            <Route
              path="dog-show-events/my_profile"
              element={<ProfilePage />}
            />

            <Route path="cat-chat" element={<DocaPage />} />
            <Route path="cat-chat/my_profile" element={<ProfilePage />} />

            <Route path="cat-health-nutrition" element={<DocaPage />} />
            <Route
              path="cat-health-nutrition/my_profile"
              element={<ProfilePage />}
            />

            <Route path="cat-services" element={<DocaPage />} />
            <Route path="cat-services/my_profile" element={<ProfilePage />} />

            <Route path="cat-show-events" element={<DocaPage />} />
            <Route
              path="cat-show-events/my_profile"
              element={<ProfilePage />}
            />

            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
          </Route>

          {/* <Route
      path={ROUTE_PATH.ADMIN}
      element={<AdminRoutes user={} isAllowed={true}/>}
    /> */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<DocaPage />} />
          <Route path="/registration" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>

    // <BrowserRouter>
    //   <CssBaseline />
    //   <Router>
    //     <div className="App">
    //       <Switch>
    //         <Route path="/" Component={CategoryPage} />
    //         {/* <Route path="/dogChat/" component={dogChat} />
    //         <Route path="/topics/:id" component={Topic} />
    //         <Route path="/topics/:id" component={Topic} />
    //         <Route path="/topics/:id" component={Topic} />
    //         <Route path="/topics/:id" component={Topic} />
    //         <Route path="/topics/:id" component={Topic} />
    //         <Route path="/topics/:id" component={Topic} />
    //         <Route path="/catShowandEvents/:id" component={Topic} /> */}
    //       </Switch>
    //     </div>
    //   </Router>
    // </BrowserRouter>
  );
}

export default App;
