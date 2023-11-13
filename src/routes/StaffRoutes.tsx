import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import StaffPage from "pages/staff/staffPage";
import { ROLE_ID_KEY, USER_TOKEN_KEY } from "constant";

const StaffRoutes = () => {
  const token = localStorage.getItem(USER_TOKEN_KEY);
  const userRoleID = JSON.parse(localStorage.getItem(ROLE_ID_KEY)!);
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute
            token={token ?? ""}
            isAllowed={
              userRoleID === 2 || userRoleID === 3 || userRoleID === 4
                ? true
                : false
            }
          >
            <StaffPage />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
};

export default StaffRoutes;
