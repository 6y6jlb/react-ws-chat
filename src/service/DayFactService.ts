import {AxiosResponse} from "axios";
import instance from "../http/funFactApiInstance";


export default class DayFactService {
    static async fetchFact(): Promise<AxiosResponse<IDayFactResponse>> {
        return instance.get ('random',)
    }

}

interface IDayFactResponse {
    "success": {
        total: number
    },
    "contents": {
        fact: string,
        id: string,
        category: string,
        subcategory: string
    }
}
