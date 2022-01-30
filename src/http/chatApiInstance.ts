import axios from "axios";
import {IUser} from "../service/AuthService";
import {LS} from "../utils/const";


// const baseURL = 'http://httplocalhost:5000';
const baseURL = 'https://ws-simple-chat-api.herokuapp.com/';

const chatApiInstance = axios.create({baseURL});

chatApiInstance.interceptors.request.use((config)=>{
    if ( config && config.headers) {
        config.headers.Authorization = `Bearer ${ localStorage.getItem ( LS.TOKEN ) }`;
        return config
    }
});

chatApiInstance.interceptors.response.use((config)=>{
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.post<AuthResponse>(`${baseURL}/auth/refresh`, {withCredentials: true})
            localStorage.setItem(LS.TOKEN, response.data.accessToken);
            return chatApiInstance.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
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