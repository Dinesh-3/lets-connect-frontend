import axios from "axios";

export const triggerConfig = () => {
    axios.defaults.baseURL = "http://localhost:5000/api";

    axios.defaults.headers.post["Content-Type"] = "application/json";

    const token = localStorage.getItem("token");

    axios.defaults.headers.common = {
        Authorization: token
    };

    axios.interceptors.response.use(
        function (response) {
            return Promise.resolve(response);
        },
        function (error) {
            // if (error["response"]["data"]["status_code"] === 403) authService.logout();
            return Promise.reject(error);
        }
    );
};

triggerConfig();

export default axios;
