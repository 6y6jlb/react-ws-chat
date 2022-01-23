import {makeAutoObservable} from "mobx";
import DayFactService from "../service/DayFactService";
import WeatherService, {IWeatherResponse} from "../service/WeatherService";
import {ILocation} from "../service/AuthService";
import {LANG} from "../components/App/const";
import {LS, SWITCHER, THEME} from "../utils/const";


export interface ISettingsStore {
    options:IOptions
}

export interface IOptions {
    theme:THEME;
    weatherWidget:SWITCHER
    onlineCounterWidget:SWITCHER
}

class SettingsStore implements ISettingsStore {
    options = {
        theme : THEME.LIGHT,
        weatherWidget : SWITCHER.OF,
        onlineCounterWidget : SWITCHER.ON,
    }


    constructor() {
        makeAutoObservable ( this, {}, {deep: true} );
    }

    saveOptions(options: any) {
        const preparedOptions = JSON.stringify(options)
        localStorage.setItem(LS.OPTIONS,preparedOptions);
    };
    setOptions(options:IOptions) {
        if (options) {
            this.options = options;
        } else {
            this.options = {
                theme : THEME.LIGHT,
                weatherWidget : SWITCHER.OF,
                onlineCounterWidget : SWITCHER.ON,
            }
        }
    };
    getOption() {
        const options = localStorage.getItem(LS.OPTIONS);
        if (options) {
            const preparedOptions = JSON.parse(options)
            this.saveOptions(preparedOptions)
        }
    };

}

export default SettingsStore;