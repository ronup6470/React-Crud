import React, { Suspense, lazy } from 'react';
import './App.css';

import { Home } from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import { Login } from './components/LogIn';
import { CustomValidation } from './components/CustomValidation';
import { CustomForm } from './components/CustomForm';

// use for lazy loading component

const Customer = lazy(() => import('./components/Customer'));
const Employee = lazy(() => import('./components/Employee'));
const CustomerForm = lazy(() => import('./components/CustomerForm'));
const AddEmployee = lazy(() => import('./components/AddEmployee'));
const Accordion = lazy(() => import('./components/Accordion'));
const Tabs = lazy(() => import('./components/Tabs'));

export default class App extends React.Component {


  render() {
    return (
      <Router>
        <div className="container">
          <h3 className="m-3 d-flex justify-content-center">
            React Js with Web api Demo
      </h3>
          <h5 className="m-3 d-flex justify-content-center">
            Employee Management Portal
      </h5>
          <Navigation />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/login' component={Login} />
              <PrivateRoute path='/customer' component={Customer} />
              <PrivateRoute path='/employee' component={Employee} />
              <PrivateRoute path='/add-customer' component={CustomerForm} />
              <PrivateRoute path='/edit-customer/:id' component={CustomerForm} />
              <PrivateRoute path='/add-employee' component={AddEmployee} />
              <Route path='/accordion' component={Accordion} />
              <Route path='/tabs' component={Tabs} />
              <Route path='/custom-validation' component={CustomValidation} />
              <Route path='/custom-form' component={CustomForm} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

