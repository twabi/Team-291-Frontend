import React, {Fragment} from "react";
import SignIn from "./Accounts/SignIn";
import AccountType from "./Accounts/AccountType";
import Home from "./Home";
import {
  Switch,
  Route,
} from "react-router-dom";
import MechRegister from "./Accounts/Mechregister";
import signUpForm from "./Accounts/SignUp";

const Navigation = () => 
(
    <Fragment>
        <Switch>
          <Route path="/" component = {Home} exact/>
          <Route path="/login" component = {SignIn}/>
          <Route path="/register" component = {AccountType} exact/>
          <Route path="/register/mechanic" component = {MechRegister}/>
          <Route path="/register/driver" component = {signUpForm}/>
        </Switch>
    </Fragment>
);

export default Navigation;

