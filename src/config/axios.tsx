import axios from "axios";
// import authService from "./AuthService";

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(
    function (response) {
        return Promise.resolve(response);
    },
    function (error) {
        // if (error["response"]["data"]["status_code"] === 403) authService.logout();
        return Promise.reject(error);
    }
);
