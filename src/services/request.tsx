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

import axios from "../config/axios";
import { AxiosRequestHeaders } from "axios";

type requestParams = {
    path: string;
    body?: {};
    params?: object;
    query?: string;
    headers?: AxiosRequestHeaders;
    method?: string;
};

type Response = {
    status: boolean;
    message: string;
    statusCode: number;
    data?: any;
};

const request = async ({ path, body, params, headers, method = "GET" }: requestParams): Promise<Response> => {
    try {
        const response = await axios.request({
            method: method,
            url: `${path}`,
            params,
            data: body,
            headers: headers
        });
        const responseData = response["data"];
        return responseData;
    } catch (error: any) {
        return (
            error?.response?.data ?? {
                status: false,
                message: error["message"] || "Internal Server Error, Please try again",
                statusCode: error["statusCode"] || 500
            }
        );
    }
};

export default request;
