import {makeAutoObservable} from "mobx";
import AuthService, {IAuthResponse, IUser} from "../service/AuthService";
import {AxiosResponse} from "axios";


interface IMEStore {
    me: IUser;
}

class MeStore implements IMEStore {
    me = {} as IUser;


    constructor() {
        makeAutoObservable ( this, {}, {deep: true} );
    }

    setMe(item: IUser) {
        this.me = item;
    };

    setAuthData(data: AxiosResponse<IAuthResponse, any>) {
        localStorage.setItem ( 'token', data.data.accessToken );
        this.setMe ( data.data.user );
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login ( email, password );
            this.setAuthData ( response );
        } catch (e: any) {
            console.warn ( e.response?.data?.message );
        }
    };

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration ( email, password );
            this.setAuthData ( response );
        } catch (e: any) {
            console.warn ( e.response?.data?.message );
        }
    };

    async refresh() {
        try {
            const response = await AuthService.refresh ();
            localStorage.setItem ( 'token', response.data.accessToken );
            this.setMe ( response.data.user );
        } catch (e: any) {
            console.warn ( e.response?.data?.message );
        }
    };

}

export default MeStore;