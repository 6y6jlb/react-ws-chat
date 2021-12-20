import {makeAutoObservable} from "mobx";
import AuthService, {IAuthResponse, IUser} from "../service/AuthService";
import {AxiosResponse} from "axios";
import DayFactService from "../service/DayFactService";


interface IUtilityStore {
    fact:string
}

class UtilityStore implements IUtilityStore {
    fact = '';


    constructor() {
        makeAutoObservable ( this, {}, {deep: true} );
    }

    setFact(item: string) {
        if (item) {
            this.fact = item;
        } else {
            this.fact = ''
        }
    };

    async fetchFact() {
        try {
            const response = await DayFactService.fetchFact();
            this.setFact ( response.data.contents.fact );
        } catch (e: any) {
            console.warn ( e.response?.data?.message );
        }
    };


}

export default UtilityStore;