import axios from "axios";
import {IUser} from "../service/AuthService";
import {LS} from "../utils/const";


let retryCount = 0
// const baseURL = 'http://localhost:5000';
const baseURL = 'https://ws-simple-chat-api.herokuapp.com/';

const chatApiInstance = axios.create({
    withCredentials: true,
    baseURL
});


chatApiInstance.interceptors.request.use((config)=>{
    if ( config && config.headers) {
        config.headers.Authorization = `Bearer ${ localStorage.getItem ( LS.TOKEN ) }`;
        return config
    }
});

chatApiInstance.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
        originalRequest._isRetry = true;
        try {
            if (retryCount > 2) {
                return ;
            }
            retryCount ++
            const response = await chatApiInstance.get<AuthResponse>(`${baseURL}/auth/refresh`)
            localStorage.setItem(LS.TOKEN, response.data.accessToken);
            return await chatApiInstance.request(originalRequest);
        } catch (e) {
            return
        }
    }
    throw error;
});


export default chatApiInstance;

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}