import {makeAutoObservable, observable} from "mobx";
import AuthService, {IAuthResponse, IUser} from "../service/AuthService";
import {AxiosResponse} from "axios";
import {IJoinFormValues} from "../components/BasicJoinForm/BasicJoinForm";
import {COUNTRY_CODE_EN, COUNTRY_CODE_RU, CountryCodeType, LANG} from "../components/App/const";
import {getLSData} from "../utils/localStorage";
import {LS} from "../utils/const";
import {ME_ERROR_ENUM} from "./const";
import {RootStore} from "./rootStore";


interface IMEStore {
    me: IUser | null;
    error: { [key in ME_ERROR_ENUM]: string };
}

class MeStore implements IMEStore {

    me = {
        language: null,} as IUser;
    error = {
        [ME_ERROR_ENUM.AUTH]: ''};
    rootStore;


    constructor(rootStore:ThisType<RootStore>) {
        makeAutoObservable(this, { rootStore: false },{deep: true})
        this.rootStore = rootStore
    }

    setMe(item: IUser | null) {
        if (item) {
            this.me = {
                ...item,
                language: item.language?.toLowerCase() as LANG,
                location: {
                    ...item.location,
                    country: item.language === 'ru'
                        ? COUNTRY_CODE_RU[item.location.country as CountryCodeType]
                        : COUNTRY_CODE_EN[item.location.country as CountryCodeType]
                }
            };
        } else {
            this.me = {} as IUser
        }
    };

    setAuthData(data: AxiosResponse<IAuthResponse, any>) {
        localStorage.setItem(LS.TOKEN, data.data.accessToken);
        data.data.user.language && localStorage.setItem(LS.LANG, data.data.user.language.toLowerCase());
        this.setMe(data.data.user);
    }

    setError(path: ME_ERROR_ENUM, error: string) {
        this.error[path] = error;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            this.setAuthData(response);
        } catch (e: any) {
            console.warn(e.response?.data?.message);
        }
    };

    async registration(values: IJoinFormValues) {
        const {password, name, country, language, city, email} = values;
        try {
            const response = await AuthService.registration({password, email, name, country, language, city});
            this.setAuthData(response);
        } catch (e: any) {
            this.setError(ME_ERROR_ENUM.AUTH,e)
        }
    };

    async refresh() {
        try {
            const response = await AuthService.refresh();
            localStorage.setItem('token', response.data.accessToken);
            this.setMe(response.data.user);
        } catch (e: any) {
            console.warn(e.response?.data?.message);
        }
    };

    async logout() {
        try {
            const response = await AuthService.logout();
            this.setMe(null);
            this.getLang()
        } catch (e: any) {
            console.warn(e.response?.data?.message);
        }
    };

    saveLang(lang: LANG | string) {
        this.me.language = lang ? lang as LANG : LANG.EN;
    };

    getLang() {
        const lang = getLSData(LS.LANG);
        this.saveLang(lang)
    };

}

export default MeStore;