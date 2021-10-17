import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCZi4YI7VP4jHaVQdudRlNbwx1FGtPeBSo",
    authDomain: "chat-firebase-react-typescript.firebaseapp.com",
    projectId: "chat-firebase-react-typescript",
    storageBucket: "chat-firebase-react-typescript.appspot.com",
    messagingSenderId: "925417681230",
    appId: "1:925417681230:web:b326e0e52f353428056e1f"
};
//init firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext(null as any)

ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          auth, firebase,firestore
      }}><App/></Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
