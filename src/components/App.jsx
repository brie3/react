import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MessengerContainer from "../containers/MessengerContainer";
import { initStore } from "../initStore";
import { Provider } from "react-redux";

const store = initStore();

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MessengerContainer} />
                        <Route
                            exact
                            path="/chats/:id"
                            component={MessengerContainer}
                        />
                        <Route
                            exact
                            path="/profile"
                            render={() => <div>Profile</div>}
                        />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
