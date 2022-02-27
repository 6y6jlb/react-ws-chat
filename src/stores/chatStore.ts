import {makeAutoObservable} from "mobx";
import {RootStore} from "./rootStore";


export enum MESSAGE_ENUM {
    MESSAGE = 'message',
    QUIT = 'quit',
    CONNECTION = 'connection'
}


export interface IMessage {
    event: MESSAGE_ENUM;
    id: string;
    name: string;
    body: string;
    connectionCounter: number;
}


interface IChat {
    messages: IMessage[];
    messageValue: string;
    isLoading: boolean;
    isConnected: boolean;
    connectionCounter?: number;
    setConnected: (isConnected: boolean) => void;
    setLoading: (isLoading: boolean) => void;
    setMessageValue: (value: string) => void;
    setMessages: (messages: any) => void;
}

class ChatStore implements IChat {
    messages = [] as IMessage[];
    messageValue = '';
    isLoading = false;
    isConnected = false;
    connectionCounter = 0;
    rootStore;

    constructor(rootStore:ThisType<RootStore>) {
        makeAutoObservable(this, { rootStore: false },{deep: true})
        this.rootStore = rootStore
    }


    setConnected(isConnected: boolean) {
        this.isConnected = isConnected;
    };

    setLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    };

    setMessageValue(value: string) {
        this.messageValue = value;
    };

    setMessages(messages: any) {
        this.messages =  [...this.messages,...messages, ];

    };

    setConnectionCounter(count: number) {
        this.connectionCounter = count;
    };
}

export default ChatStore;