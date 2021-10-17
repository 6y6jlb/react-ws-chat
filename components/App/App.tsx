import React, {useContext} from 'react';
import {NavBar} from "../NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./AppRoute/AppRoute";
import './App.css';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Loader} from "../Loader/Loader";

function App() {

    const {auth} = useContext ( Context )
    const [user,loading,error] = useAuthState ( auth )


    return (
        <BrowserRouter>
            <div style={{backgroundColor:'#ea5c8f'}}>
                <NavBar/>
                { !loading ? <AppRoute/> : <Loader/> }
            </div>
        </BrowserRouter>
    );
}

export default App;
