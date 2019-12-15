import React, { Component } from "react";
import { Header } from "../Header/Header";
// import { ChatList } from "../ChatList/ChatList";
import { Messenger } from "../Messanger/Messanger";
import("./Layout.sass");

export class Layout extends Component {
    render() {
        return (
            <section className="layout">
                <Header />
                <Messenger />
            </section>
        );
    }
}
