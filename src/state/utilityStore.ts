import {makeAutoObservable} from "mobx";
import AuthService, {IAuthResponse, IUser} from "../service/AuthService";
import {AxiosResponse} from "axios";
import DayFactService from "../service/DayFactService";
import WeatherService, {IWeatherResponse} from "../service/WeatherService";


interface IUtilityStore {
    fact:string
    weather:IWeatherResponse
}

class UtilityStore implements IUtilityStore {
    fact = '';
    weather = {} as IWeatherResponse;


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
    setWeather(item: IWeatherResponse) {
        debugger
        if (item) {
            this.weather = item;
        } else {
            this.weather = {} as IWeatherResponse
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
 async fetchWeather() {
        try {
            const response = await WeatherService.fetchWeather();
            this.setWeather(response.data) ;
        } catch (e: any) {
            console.warn ( e.response?.data?.message );
        }
    };


}

export default UtilityStore;