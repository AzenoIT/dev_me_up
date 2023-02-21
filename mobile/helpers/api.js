import axios, {axiosPrivate} from "./axios";

const callApi = async ({endpoint, method = 'GET', body, searchParams, intercept = false, customHeaders, signal}) => {
    const options = {
        method,
        url: endpoint,
    }

    if (body !== undefined) {
        options['data'] = JSON.stringify(body);
    }

    if (customHeaders !== undefined) {
        options['headers'] = customHeaders;
    }

    if (signal) {
        options['signal'] = signal;
    }

    let client = intercept ? axiosPrivate : axios;

    try {
        const response = await client(options);
        return response.data;
    } catch (error) {
        if (error.response?.status === 400) {
            throw (error.response);
        } else if (error.response?.status === 401) {
            throw new Error("Unauthorized");
        } else if (error.response?.status === 404) {
            throw new Error("Not found");
        } else {
            throw error
        }
    }
}

export default callApi;