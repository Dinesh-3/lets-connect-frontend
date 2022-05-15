import { createContext, FC, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/Hooks";
import request from "../services/request";
import history from "../services/history";

interface AuthType {
    useUser(): any[];
    useToken(): any[];
    login(form: any): any;
    logout(): boolean;
}

const defaultVariables = {
    useUser: () => [],
    useToken: () => [],
    login: () => {},
    logout: () => true
};

const AuthContext = createContext<AuthType>(defaultVariables);

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider: FC = (props: any) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useLocalStorage("token", "");

    useEffect(() => {
        const getUserDetailRequest = async () => {
            const requestObj = {
                path: "/user",
                method: "GET"
            };
            const res = await request(requestObj);
            if (res["status"] === true) setUser(res["data"]);
        };
        getUserDetailRequest();
    }, []);

    const login = async (form: any) => {
        const requestObject = {
            path: "/auth/login",
            method: "POST",
            body: form
        };
        const res = await request(requestObject);
        if (res["status"] === true) {
            setToken(res["token"]);
            setUser(res["data"]);
        }

        return res;
    };

    const logout = (): boolean => {
        setUser(null);
        setToken();
        localStorage.clear();
        history.push("/login");
        return true;
    };

    const variables = {
        useUser: () => [user, setUser],
        useToken: () => [token, setToken],
        login,
        logout
    };

    return <AuthContext.Provider value={variables}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
