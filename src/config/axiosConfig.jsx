import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000,
});

console.log("Axios instance created with baseURL:", process.env.REACT_APP_BASE_URL);

// Add a request interceptor to include the token in every request
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            console.log("Token found:", token);
            config.headers['Authorization'] = `Bearer ${token}`;
        } else {
            console.log("No token found in localStorage");
        }
        return config;
    },
    (error) => {
        console.error("Error in request interceptor:", error);
        return Promise.reject(error);
    }
);

export default instance;