import {Chat} from "../components/Chat/Chat";
import {Login} from "../components/Login/Login";
import {Registration} from "../components/Registration/Registration";
import {JoinOptions} from "../components/JoinOptions/JoinOptions";
import {Profile} from "../components/Profile/Profile";


export enum ROUTES {
    LOGIN_ROUTE = '/login',
    CHAT_ROUTE = '/chat',
    REGISTRATION_ROUTE = '/registration',
    JOIN_ROUTE = '/join',
    PROFILE_ROUTE = '/profile',
}

export const publicRoutes = [

    {
        path: ROUTES.JOIN_ROUTE,
        Component: JoinOptions,
    },
    {
        path: ROUTES.LOGIN_ROUTE,
        Component: Login,
    },
    {
        path: ROUTES.REGISTRATION_ROUTE,
        Component: Registration,
    },
];

export const privateRoutes = [
    {
        path: ROUTES.CHAT_ROUTE,
        Component: Chat,
    },
    {
        path: ROUTES.PROFILE_ROUTE,
        Component: Profile,
    },
];

