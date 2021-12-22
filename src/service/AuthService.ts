import {AxiosResponse} from "axios";
import instance from "../http/chatApiInstance";


export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return instance.post ( '/login', {email, password} );
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return instance.post ( '/registration', {email, password} );
    }

    static async logout(): Promise<void> {
        return instance.delete ( '/logout' );
    }
    static async refresh(): Promise<AxiosResponse<IAuthResponse>> {
        return instance.post ( '/refresh' );
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