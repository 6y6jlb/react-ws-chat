import {Redirect, Route, Switch} from 'react-router-dom';
import * as React from "react";
import {useContext} from "react";
import {privateRoutes, publicRoutes, ROUTES} from "../../utils/routes";
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";


const AppRoute:React.FC = () => {
    const {meStore} = useContext ( StoreContext );
    const isAuthorized = !!meStore.me.email;

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
