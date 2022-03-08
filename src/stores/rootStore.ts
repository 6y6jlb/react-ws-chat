import ChatStore from "./chatStore";
import MeStore from "./meStore";
import UtilityStore from "./utilityStore";
import SettingsStore from "./settingsStore";
import WSStore from "./wsStore";
import ErrorStore from "./errorStore";

export class RootStore {
    meStore: MeStore;
    utilityStore: UtilityStore;
    settingStore: SettingsStore;
    chatStore: ChatStore;
    wsStore: WSStore;
    errorStore: ErrorStore;

    constructor() {
        this.meStore = new MeStore(this)
        this.utilityStore = new UtilityStore(this)
        this.settingStore = new SettingsStore(this)
        this.chatStore = new ChatStore(this)
        this.wsStore = new WSStore(this)
        this.errorStore = new ErrorStore(this)
    }
}