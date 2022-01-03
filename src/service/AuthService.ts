import {AxiosResponse} from "axios";
import instance from "../http/chatApiInstance";
import {IJoinFormValues} from "../components/BasicJoinForm/BasicJoinForm";


export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return instance.post ( 'auth/login', {email, password} );
    }

    static async registration(values:IJoinFormValues): Promise<AxiosResponse<IAuthResponse>> {
        const {password,name,country,lang,city} = values;
        return instance.post ( 'auth/registration', {password,name,country,lang,city} );
    }

    static async logout(): Promise<void> {
        return instance.delete ( 'auth/logout' );
    }
    static async refresh(): Promise<AxiosResponse<IAuthResponse>> {
        return instance.post ( 'auth/refresh' );
    }
}

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IUser {
    email: string;
    id: string;
    isActivated: boolean;

}