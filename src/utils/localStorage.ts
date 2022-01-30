import {LS} from "./const";

export const getLSData = (key: LS) => {
    const data = localStorage.getItem(key);
    if (data) {
        return data
    }
    return ''
}
