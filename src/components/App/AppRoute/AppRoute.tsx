
import {Redirect, Route, Switch} from 'react-router-dom';

import * as React from "react";
import {CHAT_ROUTE, LOGIN_ROUTE, privateRoutes, publicRoutes} from '../../../utils/routes';


const AppRoute:React.FC = () => {


    return true ?
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
