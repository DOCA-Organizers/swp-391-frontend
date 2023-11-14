import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import NotFoundPage from "pages/error/NotFoundPage";
import MemberPage from "pages/member/memberPage";
import { ROLE_ID_KEY, USER_TOKEN_KEY } from "constant";

const MemberRoutes = () => {
  const token = localStorage.getItem(USER_TOKEN_KEY);
  const userRoleID = JSON.parse(localStorage.getItem(ROLE_ID_KEY)!);
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute
            token={token ?? ""}
            isAllowed={userRoleID === 5 ? true : false}
          >
            <MemberPage />
          </ProtectedRoute>
        }
      >
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default MemberRoutes;
