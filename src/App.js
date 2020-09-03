import React from "react";
import "./App.css";
<<<<<<< HEAD
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
    //create state variable to switch between the signIn and signUp pages
    const [showSignUp, setShowSignUp] = React.useState(false);
    const [showSignIn, setShowSignIn] = React.useState(true);


    //callback function that monitor the click events from the child components
    const signInCallback = () => {
        setShowSignIn(false);
        setShowSignUp(true);
    };

    //callback function that monitor the click events from the child components
    const signUpCallback = () => {
        setShowSignUp(false);
        setShowSignIn(true);
    };

    return (
      <Fragment>
          {showSignIn ? <SignIn callback={signInCallback}/> : null}
          {showSignUp ? <SignUp btnCallback={signUpCallback}/> : null}
      </Fragment>
=======
import Navigation from "./components/Navigation";


function App() {
    return ( 
      <Navigation />
>>>>>>> da91dbc6713c311841e66638b1e18e9d292aff23
    );
}

export default App;