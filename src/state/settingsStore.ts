import {makeAutoObservable} from "mobx";
import {LS, THEME} from "../utils/const";
import {getLSData} from "../utils/localStorage";


export interface ISettingsStore {
    options:IOptions
}

export interface IOptions {
    theme:THEME;
    weatherWidget: boolean
    counterWidget: boolean
}

class SettingsStore implements ISettingsStore {
    options = {
        theme : THEME.LIGHT,
        weatherWidget : true,
        counterWidget : true,
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
            this.saveOptions(options)
            this.options = options;
        } else {
            this.options = {
                theme : THEME.LIGHT,
                weatherWidget : true,
                counterWidget : true,
            }
        }
    };
    async getOption() {
        try {
            const options = getLSData(LS.OPTIONS);
            this.saveOptions(options)
        }
       catch (e) {
           console.log(e)
       }
    };

}

export default SettingsStore;