import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Messenger } from "./Messanger/Messanger";

import { UserContext } from "../components/UserContext";

export class App extends Component {
    render() {
        return (
            <UserContext.Provider value={{ user: { name: "test" } }}>
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
