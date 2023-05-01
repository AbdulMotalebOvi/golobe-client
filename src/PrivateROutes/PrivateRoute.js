import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UseContext/AuthUseContext';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    if (loading) {
        return <div className="max-w-screen-xl mx-auto progress w-56 m-auto"> <progress ></progress></div>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/GolobeSecurity/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;