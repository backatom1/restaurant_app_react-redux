import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundry from './components/error-boundry';
import RestoServise from './services/resto-service';
//!import RestoServiseContext from './components/resto-service-context';
import store from './store';

import App from './components/app';

import './index.scss';
import RestoServiceContext from './components/resto-service-context';

const restoService = new RestoServise();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App />
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

