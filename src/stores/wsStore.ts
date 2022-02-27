import {action, makeAutoObservable, observable} from "mobx";
import {RootStore} from "./rootStore";
import {MESSAGE_ENUM} from "./chatStore";


export interface IWSStore {
    socket: WebSocket | undefined;

}

class WSStore implements IWSStore {

    socket: WebSocket | undefined;
    rootStore;


    constructor(rootStore: RootStore) {
        makeAutoObservable(this, {rootStore: false}, )
        this.rootStore = rootStore
    }


    async startSocket() {
        this.socket = await new WebSocket("wss://ws-simple-chat-api.herokuapp.com");
        // this.socket = new WebSocket("wss://localhost:5000" );
        this.socket.onclose = () => setTimeout(() => this.startSocket(), 1000);
        this.socket.onerror = () => setTimeout(() => this.startSocket(), 1000);
    }

    readSocket() {
        if ( this.socket) {
            this.socket.onmessage = (messageEvent: MessageEvent) => {
                this.rootStore.chatStore.setMessages(JSON.parse(messageEvent.data));
            };
            this.socket.onopen = () => {
                this.rootStore.chatStore.setConnected(true);
                const message = {
                    event: MESSAGE_ENUM.CONNECTION,
                    id: this.rootStore.meStore.me.id,
                    name: this.rootStore.meStore.me.email,
                    body: this.rootStore.meStore.me.email,
                };
                this.socket?.send(JSON.stringify(message));
                this.rootStore.chatStore.setLoading(false);
            };
            this.socket.onmessage = (event: MessageEvent) => {
                const messages = JSON.parse(event.data);
                this.rootStore.chatStore.setMessages(messages);
            };
            this.socket.onclose = () => {
                this.rootStore.chatStore.setConnected(false);
                const message = {
                    event: MESSAGE_ENUM.CONNECTION,
                    id: this.rootStore.meStore.me.id,
                    name: this.rootStore.meStore.me.email,
                    body: '',
                };
                this.socket?.send(JSON.stringify(message));
            };
        }


    }

}

export default WSStore;