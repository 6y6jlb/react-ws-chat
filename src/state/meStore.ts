import {makeAutoObservable} from "mobx";


export interface IMe {
    name: string;
    id: string;

}

interface IMEStore {
    me: IMe;
}

class MeStore implements IMEStore {
    me = {name: ''} as IMe;


    constructor() {
        makeAutoObservable ( this, {}, {deep: true} );
    }

    setMe(item: IMe) {
        this.me = item;
        console.log (this.me.name);
    };

}

export default MeStore;