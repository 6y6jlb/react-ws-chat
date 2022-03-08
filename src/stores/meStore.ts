import {makeAutoObservable} from "mobx";
import AuthService, {IAuthResponse, IUser} from "../service/AuthService";
import {AxiosResponse} from "axios";
import {IJoinFormValues} from "../components/BasicJoinForm/BasicJoinForm";
import {COUNTRY_CODE_EN, COUNTRY_CODE_RU, CountryCodeType, LANG} from "../components/App/const";
import {getLSData} from "../utils/localStorage";
import {LS} from "../utils/const";
import {COMMON_ERROR_CODE} from "./const";
import {RootStore} from "./rootStore";


interface IMEStore {
    me: IUser | null;
}

class MeStore implements IMEStore {

    me = {
        language: null,
    } as IUser;
    rootStore;


    constructor(rootStore: RootStore) {
        makeAutoObservable(this, {rootStore: false}, {deep: true})
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

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            this.setAuthData(response);
        } catch (e: any) {
            this.rootStore.errorStore.setError({
                message: e.response?.statusText || 'login error',
                code: e.response?.status || COMMON_ERROR_CODE
            });
        }
    };

    async registration(values: IJoinFormValues) {
        const {password, name, country, language, city, email} = values;
        try {
            const response = await AuthService.registration({password, email, name, country, language, city});
            this.setAuthData(response);
        } catch (e: any) {
            this.rootStore.errorStore.setError({
                message: e.response?.statusText || 'registration error',
                code: e.response?.status  || COMMON_ERROR_CODE
            });
        }
    };

    async refresh() {
        try {
            const response = await AuthService.refresh();
            localStorage.setItem('token', response.data.accessToken);
            this.setMe(response.data.user);
        } catch (e: any) {
            this.rootStore.errorStore.setError({
                message: e.response?.statusText || 'refresh error',
                code: e.response?.status || COMMON_ERROR_CODE
            });
        }
    };

    async logout() {
        try {
            const response = await AuthService.logout();
            this.setMe(null);
            this.getLang()
        } catch (e: any) {
            this.rootStore.errorStore.setError({
                message: e.response?.statusText || 'logout error',
                code: e.response?.status || COMMON_ERROR_CODE
            });
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