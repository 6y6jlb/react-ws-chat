import {makeAutoObservable} from "mobx";
import DayFactService from "../service/DayFactService";
import WeatherService, {IWeatherResponse} from "../service/WeatherService";
import {ILocation} from "../service/AuthService";
import {LANG} from "../components/App/const";
import {RootStore} from "./rootStore";


interface IUtilityStore {
    fact:string
    weather:IWeatherResponse
}

class UtilityStore implements IUtilityStore {
    fact = '';
    weather = {} as IWeatherResponse;
    rootStore;


    constructor(rootStore:ThisType<RootStore>) {
        makeAutoObservable(this, { rootStore: false },{deep: true})
        this.rootStore = rootStore
    }

    setFact(item: string) {
        if (item) {
            this.fact = item;
        } else {
            this.fact = ''
        }
    };
    setWeather(item: IWeatherResponse) {
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
 async fetchWeather(payload: { location: ILocation, language: LANG | null }) {
        try {
            const response = await WeatherService.fetchWeather(payload);
            this.setWeather(response.data) ;
        } catch (e: any) {
            console.warn ( e.response?.data?.message );
        }
    };


}

export default UtilityStore;