import {AxiosResponse} from "axios";
import instance from "../http/weatherApiInstance";

const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY || '===='


export default class WeatherService {
    static async fetchWeather(): Promise<AxiosResponse<IWeatherResponse>> {
        return instance.get (`?q=${'moscow'}&appid=${weather_api_key}`,{

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
        "temp":number,
        "pressure": number,
        "humidity": number,
        "temp_min": number,
        "temp_max":number
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

