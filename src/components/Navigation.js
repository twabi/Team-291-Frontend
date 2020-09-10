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

const Navigation = () => {

    const users = [
        {
            uuid: "ef0c2274-706f-419f-8ce0-c72e251b5e4f",
            username: "twabi",
            password: "my",
            accountType: "Driver",
            md5: "88ec545f1d7201dbf84198e4c9a664b3",
            sha1: "d71250f0798aa0811a4186a1de35aa4bc865b6ec",
            sha256: "2a617a3dafe8e57c16116c5a05d850dd0f7953cdc48224d738d66246beb51e6f"

        },
        {
            uuid: "8b36f8a9-7b20-4b5f-b120-32ef0479230c",
            username: "sammyKiiza",
            password: "shadow",
            accountType: "Mechanic",
            md5: "cb3da3c6fb945a891daccfd3abff1d0e",
            sha1: "e55b1786e78bad82edab2a606d06e0c8e56f06d2",
            sha256: "b0636443ee5188936b4936ac5e8f192e07543252f4d467224dedc799027e9fbe"
        }
    ];

    const [loggedInUser, setLoggedInUser] = React.useState({});
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);


    const login = (username, password) => {
        var logged  = false;
        users.map((user, index) => {
            if((username === user.username) && (password === user.password)){
                setIsLoggedIn(true);
                setLoggedInUser(user);
                window.location.href="/home";
                logged = true;
            }
        });

        if(!logged){
            alert("username or password is wrong");
        }
        if(logged){
            setIsLoggedIn(true);
        }
    };

    return (
        <Fragment>
            <Switch>

                <Route path="/" render={(props) => (
                    <Home {...props} isLoggedIn={isLoggedIn} userDetails={loggedInUser} />)} exact />

            </Switch>
        </Fragment>
    );
};


export default Navigation;

