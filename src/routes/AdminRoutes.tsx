import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';
import DocaPage from 'pages/docaPage';
import PageNotFound from 'pages/PageNotFound';

type Props = {
    isAllowed: boolean;
    user: { id: string; username: string; role: { id: string; name: string } };
}

function AdminRoutes(props: Props) {
    return (
        <Routes>
            <Route
                element={
                    <ProtectedRoute isAllowed={props.isAllowed} user={props.user}>
                        <DocaPage />
                    </ProtectedRoute>
                }
            >
                <Route index element={<DocaPage/>} />
                
                <Route path= "*" element={<PageNotFound/>}/>
            </Route>
        </Routes>
    )
}

export default AdminRoutes