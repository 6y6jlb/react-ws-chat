import axios from "axios";
import {IUser} from "../service/AuthService";


// const baseURL = 'http://localhost:5000/auth';
const baseURL = 'wss://ws-simple-chat-api.herokuapp.com';

const instance = axios.create({baseURL});

instance.interceptors.request.use((config)=>{
    if ( config && config.headers) {
        config.headers.Authorization = `Bearer ${ localStorage.getItem ( 'token' ) }`;
        return config
    }
});

instance.interceptors.response.use((config)=>{
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.post<AuthResponse>(`${baseURL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return instance.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
});


export default instance;

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}