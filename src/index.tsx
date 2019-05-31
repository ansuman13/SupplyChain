import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Daraz from './Components/Register/Address/daraz.js';
import Dashboard from './Components/dashboard/Dashboard';


const routing = (
    <Router>
        <div>
            <Route strict exact path='/' component={App}/>
            <Route strict path='/dashboard/' component={Dashboard} />
            <Route strict path='/daraz/' component={Daraz} />
            <Route strict path='/user/signin/' component={SignIn} />
            <Route strict path='/register/' component={Register} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
