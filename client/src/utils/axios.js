import axios from 'axios';
import { stringify } from 'querystring';
import Cookies from 'js-cookie';
export const FetchAPI = async (path, method, headers, body) => {
    let token = Cookies.get("token")
    const defaultHeaders = {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    };
    if (typeof headers === 'object') {
        Object.assign(defaultHeaders, headers);
    }
    return axios({
        url: process.env[`REACT_APP_BACKEND_${(process.env.NODE_ENV !== 'production' ? "DEV" : "PROD")}`] + path,
        method,
        headers: defaultHeaders,
        data: body
    });
};

export const get = (path, query = {}, headers = {}) => {
    return FetchAPI(`${path}?${stringify(query)}`, 'GET', headers, {});
};
export const post = (path, body, headers) => FetchAPI(path, 'POST', headers, body);
export const patch = (path, body, headers) => FetchAPI(path, 'PUT', headers, body);
export const destroy = (path, body, headers) => FetchAPI(path, 'DELETE', headers, body);
