import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import './assets/fonts/style.css'
import Global from './components/Global'
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://electric-kangaroo-87.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="en">
      <ApolloProvider client={client}>
        <Router>
          <Global />
          <App />
        </Router>
      </ApolloProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
