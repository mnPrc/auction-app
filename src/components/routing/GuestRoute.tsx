// components/PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isUserAuthenticated } from "../../store/auth/selectors";
import { useAppSelector } from "../../hooks/useDispatchAndSelector";

interface PrivateRouteProps {
    element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const isAuthenticated = useAppSelector(isUserAuthenticated);

    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;