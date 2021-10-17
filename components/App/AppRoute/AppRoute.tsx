import React, {useContext} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {CHAT_ROUTE, LOGIN_ROUTE, privateRoutes, publicRoutes} from '../../../utils/routes';
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../../index";

const AppRoute = () => {
    const {auth} = useContext ( Context )
    const [user] = useAuthState ( auth )
    return user ?
        <Switch>
            { privateRoutes.map ( ({path, Component}) => {
                return <Route key={ path } path={ path } component={ Component } exact={ true }/>
            } ) }
            <Redirect to={ CHAT_ROUTE }/>
        </Switch>
        :
        <Switch>
            { publicRoutes.map ( ({path, Component}) => {
                return <Route key={ path } path={ path } component={ Component } exact={ true }/>
            } ) }
            <Redirect to={ LOGIN_ROUTE }/>
        </Switch>
}


export default AppRoute;
