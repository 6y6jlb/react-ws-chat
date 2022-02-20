import {AxiosResponse} from "axios";
import instance from "../http/chatApiInstance";
import {IJoinFormValues} from "../components/BasicJoinForm/BasicJoinForm";
import {LANG} from "../components/App/const";


export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return instance.post ( 'auth/login', {email, password} );
    }

    static async registration(values:IJoinFormValues): Promise<AxiosResponse<IAuthResponse>> {
        const {password,name,country,language,city,email} = values;
        return instance.post ( 'auth/registration', {email,password,name,country,language,city} );
    }

    static async logout(): Promise<void> {
        return instance.delete ( 'auth/logout' );
    }
    static async refresh(): Promise<AxiosResponse<IAuthResponse>> {
        return instance.get ( 'auth/refresh');
    }
}

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IUser {
    email: string;
    name: string;
    language: LANG | null;
    location:ILocation
    id: string;
    isActivated: boolean;

}

export interface ILocation {country:string ,city:string}