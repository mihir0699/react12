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
    <Router>
      <Switch>
        <Route exact path = '/react12/' component={login} />
        <PrivateRoutes exact path ='/react12/user' component = {user} />
        <PrivateRoutes exact path ='/react12/admin' component = {admin} />
      </Switch>
    </Router>
    </AuthState>
  );
}

export default App;
