import {makeAutoObservable} from "mobx";


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

export interface IMe {
    name: string;
    id: string;

}

interface IChat {
    me: IMe;
    messages: IMessage[];
    messageValue: string;
    nameValue: string;
    isLoading: boolean;
    isConnected: boolean;
    connectionCounter?: number;
    setMe: (item: IMe) => void;
    setConnected: (isConnected: boolean) => void;
    setLoading: (isLoading: boolean) => void;
    setMessageValue: (value: string) => void;
    setNameValue: (value: string) => void;
    setMessages: (messages: any) => void;
}

class ChatStore implements IChat {
    me = {name: ''} as IMe;
    messages = [] as IMessage[];
    messageValue = '';
    nameValue = '';
    isLoading = false;
    isConnected = false;
    connectionCounter = 0;

    constructor() {
        makeAutoObservable ( this, {}, {deep: true} );
    }

    setMe(item: IMe) {
        this.me = item;

    };

    setConnected(isConnected: boolean) {
        this.isConnected = isConnected;
    };

    setLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    };

    setMessageValue(value: string) {
        this.messageValue = value;
    };

    setNameValue(value: string) {
        this.nameValue = value;
    };

    setMessages(messages: any) {
        this.messages =  [...this.messages,...messages, ];

    };

    setConnectionCounter(count: number) {
        this.connectionCounter = count;
    };
}

export default ChatStore;