import { UserResponse } from "interfaces/user/userResponse";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import UserPage from "pages/user/userPage";
import PageNotFound from "pages/PageNotFound";

type Props = { isAllowed: boolean; user: UserResponse };

const UserRoutes = (props: Props) => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={props.isAllowed} user={props.user}>
            <UserPage />
          </ProtectedRoute>
        }
      >
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
