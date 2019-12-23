import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MessengerContainer from "../containers/MessengerContainer";
import Profile from "../components/Profile/Profile";
import { PersistGate } from "redux-persist/es/integration/react";
import initStore, { history } from "../initStore";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

const { store, persistor } = initStore();

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={MessengerContainer}
                            />
                            <Route
                                exact
                                path="/chats/:id"
                                component={MessengerContainer}
                            />
                            <Route exact path="/profile" component={Profile} />
                        </Switch>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        );
    }
}
