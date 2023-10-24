import { CssBaseline } from "@mui/material";
import Login from "components/login";
import DocaPage from "pages/docaPage";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Report from "components/report";
import AdminPage from "pages/admin/adminPage";
import RegistrationPage from "pages/registrationPage";
import LoginPage from "pages/loginPage";
import CategoryPage from "pages/categoryPage";
import ReportPage from "pages/reportPage";
import Category from "components/category";

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

    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Category />}>
          <Route path="/dogchat" element={<DocaPage />} />
          <Route path="dogHealthAndNutrition" element={<LoginPage />} />
          <Route path="dogServices" element={<LoginPage />} />
          <Route path="dogShowAndEvents" element={<LoginPage />} />
          <Route path="catChat" element={<LoginPage />} />
          <Route path="catHealthAndNutrition" element={<LoginPage />} />
          <Route path="catServices" element={<LoginPage />} />
          <Route path="catShowAndEvents" element={<LoginPage />} />
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
