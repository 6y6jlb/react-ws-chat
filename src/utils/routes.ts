import { Chat } from "../components/Chat/Chat"
import { Login } from "../components/Login/Login"


export const LOGIN_ROUTE = '/LOGIN_ROUTE'
export const CHAT_ROUTE = '/CHAT_ROUTE'


export const publicRoutes =[
    {
        path:LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes =[
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]

