import {Redirect, Route, Switch} from 'react-router-dom';
import * as React from "react";
import {privateRoutes, publicRoutes, ROUTES} from "../../utils/routes";
import {useContext} from "react";
import {MyContext} from "../../state/context";



const AppRoute:React.FC = () => {
    const [chat, me, socket] = useContext ( MyContext );
    const isAuthorized = !!me.me.email;

    return isAuthorized ?
        <Switch>
            { privateRoutes.map ( ({path, Component}) => {
                return <Route key={ path } path={ path } component={ Component } exact={ true }/>
            } ) }
            <Redirect to={ROUTES. CHAT_ROUTE }/>
        </Switch>
        :
        <Switch>
            { publicRoutes.map ( ({path, Component}) => {
                return <Route key={ path } path={ path } component={ Component } exact={ true }/>
            } ) }
            <Redirect to={ ROUTES.JOIN_ROUTE }/>
        </Switch>
}


export default AppRoute;
