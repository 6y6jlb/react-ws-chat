import {ROUTES} from "../routes";

export const pageSelector = (history:any) => {
    return {
        isLoginPage : history.pathname.includes ( ROUTES.LOGIN_ROUTE ),
        isLJoinPage : history.pathname.includes ( ROUTES.JOIN_ROUTE ),
        isProfilePage : history.pathname.includes ( ROUTES.PROFILE_ROUTE ),
        isChatPage : history.pathname.includes ( ROUTES.CHAT_ROUTE ),
    }
 }