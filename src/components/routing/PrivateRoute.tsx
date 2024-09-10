// components/GuestRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isUserAuthenticated } from "../../store/auth/selectors";
import { useAppSelector } from "../../hooks/useDispatchAndSelector";

interface GuestRouteProps {
    element: JSX.Element;
}

const GuestRoute: React.FC<GuestRouteProps> = ({ element }) => {
    const isAuthenticated = useAppSelector(isUserAuthenticated);

    return !isAuthenticated ? element : <Navigate to="/" />;
};

export default GuestRoute;