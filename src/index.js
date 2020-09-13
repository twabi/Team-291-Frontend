import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import {ApolloClient, ApolloProvider, gql, InMemoryCache} from "@apollo/client";


const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
});

client
.query({
    query: gql`
        query GetRates {
            rates(currency: "USD") {
                currency
            }
        }
    `
})
.then(result => console.log(result));

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </ApolloProvider>

    ,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();