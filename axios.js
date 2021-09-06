import axios from 'axios'
import ENV from './.ENV';

const instance = axios.create({
    baseURL: ENV.API_DB_URL,
    // withCredentials: true
});

instance.interceptors.response.use(
    (response) => {
        // Thrown error for request with OK status code
        const { data } = response;
        return data;
    },
);

export default instance;
