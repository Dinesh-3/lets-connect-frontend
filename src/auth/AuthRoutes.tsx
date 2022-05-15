import React from "react";
import { Route, Navigate } from "react-router-dom";
import Notification from "../components/Notification";
import { useAuth } from "./AuthContext";

/**
 *
 * @param {*} Component
 * @returns Private
 * @description Prevent from not logged in user
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { useUser } = useAuth();
    const [userDetail] = useUser();

    return <Route {...rest} element={userDetail ? <Component /> : <Navigate to="/login" replace />} />;
};

/**
 *
 * @param {*} Component
 * @returns ProtectFromLoggedInUser
 * @description Protect Route from already login User
 */
const ProtectFromLoggedInUser = ({ component: Component, ...rest }) => {
    const { useUser } = useAuth();
    const [userDetail] = useUser();

    return <Route {...rest} element={userDetail ? <Navigate to="/" /> : <Component />} />;
};

/**
 *
 * @param {*} Component
 * @returns AdminRoute
 * @description Return Admin component only if logged in user is Admin
 */
const AdminRoute = ({ component: Component, ...rest }) => {
    const { useUser } = useAuth();
    const [userDetail] = useUser();

    return (
        <Route
            {...rest}
            element={<div>{userDetail && userDetail.isAdmin ? <Component /> : <Navigate to="/" />}</div>}
        />
    );
};

export { PrivateRoute, ProtectFromLoggedInUser, AdminRoute };
