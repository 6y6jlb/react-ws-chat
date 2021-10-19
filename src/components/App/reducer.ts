import * as React from "react";

let defaultValue: any;
export let MyContext: React.Context<any>;
MyContext = React.createContext (defaultValue);

export const initialState = {
    me: {name:''} as IMe,
    messages: [] as IMessage[],
    messageValue: '',
    nameValue: '',
    isLoading: false,
    isConnected: false,


};

export type State = typeof initialState


export const reducer = (state: State, action: ActionTypes) => {
    switch (action.type) {
        case 'set_me':
        case 'set_loading':
        case 'set_message_value':
        case 'set_name_value':
        case 'set_connected':
            return {...state, ...action.payload};
        case 'set_messages':
            return {...state, messages:[...state.messages, action.payload.messages]};
        default:
            throw new Error ();
    }
};


export const setMe = (item: IMe) => {
    return {
        type: 'set_me' as const,
        payload: {me: item},
    };
};
export const setConnected = (isConnected:boolean) => {
    return {
        type: 'set_connected' as const,
        payload: {isConnected},
    };
};

export const setLoading = (isLoading: boolean) => {
    return {
        type: 'set_loading' as const,
        payload: {isLoading},
    };
};
export const setMessageValue = (value: string) => {
    return {
        type: 'set_message_value' as const,
        payload: {messageValue: value},
    };
};
export const setNameValue = (value: string) => {
    return {
        type: 'set_name_value' as const,
        payload: {nameValue: value},
    };
};
export const setMessages = (messages: any) => {
    return {
        type: 'set_messages' as const,
        payload: {messages},
    };
};

export enum MESSAGE_ENUM {
   MESSAGE = 'message',
   QUIT = 'quit',
   CONNECTION = 'connection'
}

export type ActionTypes =
    ReturnType<typeof setMessages>
    | ReturnType<typeof setMe>
    | ReturnType<typeof setMessageValue>
    | ReturnType<typeof setNameValue>
    | ReturnType<typeof setLoading>
    | ReturnType<typeof setConnected>

export interface IMessage {
    event: MESSAGE_ENUM,
    id: string,
    name: string,
    body: string
}

export interface IMe {
    name: string;
    id: string;

}


