import { CssBaseline } from "@mui/material";
import DocaPage from "pages/docaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
