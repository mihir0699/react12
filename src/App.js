import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import login from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import user from './components/user';
import admin from './components/admin';
import AuthState from './context/authState';
import PrivateRoutes from './components/privateRoutes';



function App() {
  return (
    <AuthState>
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path = '/' component={login} />
        <PrivateRoutes exact path ='/user' component = {user} />
        <PrivateRoutes exact path ='/admin' component = {admin} />
      </Switch>
    </Router>
    </AuthState>
  );
}

export default App;
