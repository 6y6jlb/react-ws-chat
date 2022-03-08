import * as React from 'react';
import {useContext, useEffect} from 'react';
import {NavBar} from "../NavBar/NavBar";
import './App.css';
import {Loader} from "../Loader/Loader";
import {observer} from "mobx-react-lite";
import AppRoute from "../AppRoute/AppRoute";
import {IntlProvider} from "react-intl";
import {messages} from "../../i18n/messages";
import {LOCALES} from "../../i18n/locales";
import {LS} from "../../utils/const";
import {LANG} from "./const";
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";
import ErrorsLayout from '../../Layouts/Errors';


const App: React.FC = observer((props) => {
    const {chatStore,meStore,wsStore} = useContext(StoreContext)
    const isAuthorized = !!meStore.me.email;
    const connect = async () => {
        chatStore.setLoading(true);
        await wsStore.startSocket();
    };
    useEffect(() => {
        if (!meStore.me.language) {
            meStore.getLang()
        }
        if (localStorage.getItem(LS.TOKEN)) {
            meStore.refresh();
        }
    }, []);

    useEffect(() => {
        if (!wsStore.socket && isAuthorized) {
            connect().then(()=>{
                wsStore.readSocket()
            });
        }
    }, [isAuthorized,wsStore,chatStore,connect,meStore]);

    if (chatStore.isLoading) return <Loader/>;
    return (
        <IntlProvider messages={messages[meStore.me.language || LANG.EN]} defaultLocale={LOCALES.ENGLISH}
                      locale={meStore.me.language ? meStore.me.language : LANG.EN}>
            <ErrorsLayout>
                <NavBar/>
                <AppRoute/>
            </ErrorsLayout>
        </IntlProvider>
    );
});

export default App;