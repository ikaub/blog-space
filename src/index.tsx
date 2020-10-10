import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router basename={process.env.PUBLIC_URL}>
                    <App/>
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
