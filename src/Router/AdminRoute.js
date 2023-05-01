import React, { useContext } from 'react';
import { AuthContext } from '../UseContext/AuthUseContext';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const [isAdmin, isAdminLoader] = useAdmin(user?.email)

    if (loading || isAdminLoader) {
        return <div style={{ textAlign: 'center', marginTop: '200px' }}>Loading...</div>
    }
    if (user?.email && isAdmin) {
        return children
    }
    return <Navigate to="/GolobeSecurity/login" state={{ from: location }} replace />
};

export default AdminRoute;