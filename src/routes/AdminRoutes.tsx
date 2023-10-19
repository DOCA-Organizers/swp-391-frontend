import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import DocaPage from "pages/docaPage";
import PageNotFound from "pages/PageNotFound";
import AdminPage from "pages/admin/adminPage";

type Props = {
  isAllowed: boolean;
  user: { id: string; username: string; role: { id: string; name: string } };
};

function AdminRoutes(props: Props) {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={props.isAllowed} user={props.user}>
            <AdminPage />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
