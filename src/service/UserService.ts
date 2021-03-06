import {AxiosResponse} from "axios";
import instance from "../http/chatApiInstance";
import {IUser} from "./AuthService";


export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return instance.post ('/getUsers',)
    }

}
