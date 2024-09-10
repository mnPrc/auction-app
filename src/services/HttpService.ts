import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

export default class HttpService {
    client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: import.meta.env.VITE_API_KEY,
        });

        this.client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            const token = localStorage.getItem("token");
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
    }
}