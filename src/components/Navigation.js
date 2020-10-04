import React, {Fragment} from "react";
import Home from "./Home";
import {
    Switch,
    Route,
} from "react-router-dom";
const Navigation = () => {


    return (
        <Fragment>
            <Switch>

                <Route path="/" render={(props) => (
                    <Home {...props} />)} exact />

            </Switch>
        </Fragment>
    );
};


export default Navigation;

