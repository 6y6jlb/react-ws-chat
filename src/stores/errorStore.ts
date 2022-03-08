import {makeAutoObservable} from "mobx";
import {RootStore} from "./rootStore";


export type RequestErrorType = {
    message: string, code: number
} | null

interface IMEStore {
    // errors: { [key in ME_ERROR_ENUM]: RequestErrorType };
    errors: RequestErrorType[]
}

class ErrorStore implements IMEStore {
    errors = [] as RequestErrorType[];
    rootStore;


    constructor(rootStore: ThisType<RootStore>) {
        makeAutoObservable(this, {rootStore: false}, {deep: true})
        this.rootStore = rootStore
    }

    setError(payload: { message: string, code: number }) {
        const {code,  message} = payload;
        this.errors.push({code, message});
    }

}

export default ErrorStore;