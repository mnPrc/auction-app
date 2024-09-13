// components/GuestRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isUserAuthenticated } from "../../store/auth/selectors";
import { useAppSelector } from "../../hooks/useDispatchAndSelector";
import { RouteProps } from "../../types/props.types";

const GuestRoute: React.FC<RouteProps> = ({ element }) => {
    const isAuthenticated = useAppSelector(isUserAuthenticated);

    return !isAuthenticated ? element : <Navigate to="/" />;
};

export default GuestRoute;