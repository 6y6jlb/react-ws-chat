import {makeAutoObservable} from "mobx";
import {LS, SWITCHER, THEME} from "../utils/const";
import {getLSData} from "../utils/localStorage";


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
            this.saveOptions(options)
            this.options = options;
        } else {
            this.options = {
                theme : THEME.LIGHT,
                weatherWidget : SWITCHER.OF,
                onlineCounterWidget : SWITCHER.ON,
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