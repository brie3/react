import React, { Component, createContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Messenger } from "./Messanger/Messanger";

export const UserContext = createContext({});

export class App extends Component {
    render() {
        return (
            <UserContext.Provider value={{ name: "test" }}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Messenger} />
                        <Route exact path="/chats/:id" component={Messenger} />
                        <Route
                            exact
                            path="/profile"
                            render={() => <div>Profile</div>}
                        />
                    </Switch>
                </BrowserRouter>
            </UserContext.Provider>
        );
    }
}
