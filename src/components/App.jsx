import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Layout} />
                    <Route exct path="/chats/:id" component={Layout} />
                </Switch>
            </BrowserRouter>
        );
    }
}
