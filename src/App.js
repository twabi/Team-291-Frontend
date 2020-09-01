import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomeLayout from "./components/HomeLayout";
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <main>
        <Switch>
          <Route 
          path="/"
            component = {HomeLayout}
            exact
          />
          <Route 
          path="/login"
          component = {SignIn}
          />
          <Route 
          path="/register"
          component = {SignUp}
          />
        </Switch>
      </main>
      
  );
}

export default App;
