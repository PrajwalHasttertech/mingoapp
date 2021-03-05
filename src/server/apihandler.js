import axios from "axios";
import {apiEndPoint, apiEndPoint1} from "./endPoint";
import {route} from "./route";

export const handleError = (error) => {
    function isNetworkError(err) {
        return err.isAxiosError && !err.response;
    }

    let message = "";
    if (isNetworkError(error)) {
        message = "Network Error";
        return {success: false, isNetworkError: true, message};
    } else {
        const data = error.response.data;
        console.log("error", data);
        message = data.message;
        return {success: false, isNetworkError: false, message};
    }
};

export const apiHandleDirect = async (options) => {
    try {
        console.log(options);
        const result = await axios(options);
        const {data} = result;
        if (!data.error) {
            return {success: true, data: data};
        }
    } catch (error) {
        return handleError(error);
    }
};

export const apiHandler = async (
    Route,
    Data,
    lazyLoading,
    skip,
    limit,
    query,
    queryValue,
) => {
    try {
        const {method, url} = route[Route];

        const options = {
            method: method,
            url: apiEndPoint + url,
            data: Data,
        };

        if (lazyLoading) {
            options.url =
                options.url +
                "?" +
                "skip=" +
                skip +
                "&" +
                "limit=" +
                limit +
                "&" +
                query +
                "=" +
                queryValue;
        }

        const response = await axios(options);
        const {data} = response;

        //console.log(data);
        if (!data.error) {
            return {success: true, data: data};
        }
    } catch (error) {
        return handleError(error);
    }
};

export const apiHandler2 = async (
    Route,
    Data,
    lazyLoading,
    page,
    limit,
    query,
    queryValue,
) => {
    try {
        const {method, url} = route[Route];

        const options = {
            method: method,
            url: apiEndPoint + url,
            data: Data,
        };

        if (lazyLoading) {
            options.url =
                options.url +
                "?" +
                "page=" +
                page +
                "&" +
                "limit=" +
                limit +
                "&" +
                query +
                "=" +
                queryValue;
        }
        console.log(options);
        const response = await axios(options);
        const {data} = response;

        //console.log(data);
        if (!data.error) {
            return {success: true, data: data};
        }
    } catch (error) {
        return handleError(error);
    }
};

export const apiHandler1 = async (
    Route,
    Data,
    lazyLoading,
    skip,
    limit,
    query,
    queryValue,
) => {
    try {
        const {method, url} = route[Route];

        const options = {
            method: method,
            url: apiEndPoint1 + url,
            data: Data,
        };
        console.log(options);
        if (lazyLoading) {
            options.url =
                options.url +
                "?" +
                "skip=" +
                skip +
                "&" +
                "limit=" +
                limit +
                "&" +
                query +
                "=" +
                queryValue;
        }
        console.log(options);
        const response = await axios(options);
        const {data} = response;

        //console.log(data);
        if (!data.error) {
            return {success: true, data: data};
        }
    } catch (error) {
        return handleError(error);
    }
};
export const directApihandler = async (Route, Data) => {
    try {
        const options = {
            method: Route.method,
            url: apiEndPoint + Route.url,
            data: Data,
        };

        const response = await axios(options);
        const {data} = response;
        //console.log(data);
        if (!data.error) {
            return {success: true, data: data};
        }
    } catch (error) {
        return handleError(error);
    }
};
