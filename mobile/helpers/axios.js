import axios from 'axios';

const BASE_URL = 'http://192.168.8.135:3001';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: false
});
