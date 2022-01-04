import {makeAutoObservable} from "mobx";
import AuthService, {IAuthResponse, IUser} from "../service/AuthService";
import {AxiosResponse} from "axios";
import {IJoinFormValues} from "../components/BasicJoinForm/BasicJoinForm";


interface IMEStore {
    me: IUser | null;
}

class MeStore implements IMEStore {
    me = {} as IUser;


    constructor() {
        makeAutoObservable ( this, {}, {deep: true} );
    }

    setMe(item: IUser | null) {
        if (item) {
            this.me = item;
        } else {
            this.me = {} as IUser
        }
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

    async registration(values:IJoinFormValues) {
        const {password,name,country,language,city,email} = values;
        try {
            const response = await AuthService.registration ({password,email, name, country, language, city});
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
    async logout() {
        try {
            const response = await AuthService.logout();
            this.setMe ( null );
        } catch (e: any) {
            console.warn ( e.response?.data?.message );
        }
    };

}

export default MeStore;