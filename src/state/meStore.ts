import {makeAutoObservable} from "mobx";
import AuthService, {IUser} from "../service/AuthService";


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

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login ( email, password );
            localStorage.setItem ( 'token', response.data.accessToken );
            this.setMe ( response.data.user );
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