import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import AdminPage from "pages/admin/adminPage";
import NotFoundPage from "pages/error/NotFoundPage";
import { ROLE_ID_KEY, USER_TOKEN_KEY } from "constant";

function AdminRoutes() {
  const token = localStorage.getItem(USER_TOKEN_KEY);
  const userRoleID = JSON.parse(localStorage.getItem(ROLE_ID_KEY)!);
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute
            token={token ?? ""}
            isAllowed={userRoleID === 1 ? true : false}
          >
            <AdminPage />
          </ProtectedRoute>
        }
      >
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
