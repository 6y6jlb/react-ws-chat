import {AxiosResponse} from "axios";
import chatInstance from '../http/chatApiInstance'
import {ILocation} from "./AuthService";
import {LANG} from "../components/App/const";


export default class WeatherService {
    static async fetchWeather(payload:{location: ILocation, lang: LANG}): Promise<AxiosResponse<IWeatherResponse>> {
        return chatInstance.post(`/utils/weather`, {
            ...payload
        })
    }

}

export interface IWeatherResponse {
    "coord": {
        "lon": number,
        "lat": number
    },
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }
    ],
    "base": string,
    "main": {
        "temp": number,
        "pressure": number,
        "humidity": number,
        "temp_min": number,
        "temp_max": number
    },
    "visibility": number,
    "wind": {
        "speed": number,
        "deg": number
    },
    "clouds": {
        "all": number
    },
    "dt": number,
    "sys": {
        "type": number,
        "id": number,
        "message": number,
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    "id": number,
    "name": string,
    "cod": number
}

