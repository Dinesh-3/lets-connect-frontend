import axios, { AxiosRequestHeaders } from "axios";
/*const HttpRequest = async ({path, body, query, headers, method}) => {
    try {
        const response = await fetch(`${Http}${path}${query ? "?"+query : ""}`, {
            method: method,
            headers: headers || {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const responseData = await response.json();
        return responseData       
    } catch (error) {
        return {
            "status": false,
            "message": error["message"] || "Internal Server Error, Please try again",
            "status_code": error["status_code"] || 500
        }
    }
} */

type requestParams = {
    path: string;
    body: {};
    query: string;
    headers: AxiosRequestHeaders;
    method: string;
};

const request = async ({ path, body, query, headers, method }: requestParams): Promise<object> => {
    try {
        const response = await axios.request({
            method: method,
            url: `${path}${query ? "?" + query : ""}`,
            data: body,
            headers: headers
        });
        const responseData = response["data"];
        return responseData;
    } catch (error) {
        return (
            error?.response?.data ?? {
                status: false,
                message: error["message"] || "Internal Server Error, Please try again",
                status_code: error["status_code"] || 500
            }
        );
    }
};

export default request;
