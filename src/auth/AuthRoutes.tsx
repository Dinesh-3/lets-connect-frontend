import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
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

    return (
        <Route
            {...rest}
            render={(props) => (userDetail ? <Component {...props} /> : <Navigate to="/login" replace />)}
        />
    );
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

    return (
        <Route
            {...rest}
            render={(props) => {
                if (userDetail) return <Navigate to="/" />;
                return <Component {...props} />;
            }}
        />
    );
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
            render={(props) => {
                if (userDetail && userDetail.isAdmin) {
                    return <Component {...props} />;
                } else {
                    Notification.show({
                        status: false,
                        message: "Access denied for normal users"
                    });
                    return <Navigate to="/" />;
                }
            }}
        />
    );
};

export { PrivateRoute, ProtectFromLoggedInUser, AdminRoute };
