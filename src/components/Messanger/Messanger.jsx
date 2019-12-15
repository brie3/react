import React, { Component } from "react";
import { ChatList } from "../ChatList/ChatList";
//import { MessageList } from "../MessageList/MessageList";
import { MessengerForm } from "../MessengerForm/MessengerForm";
import("./Messenger.sass");

export class Messenger extends Component {
    state = {
        chats: {
            1: {
                name: "chat-1",
                messages: [
                    {
                        name: "Vasia Pupkine",
                        content:
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                    },
                    {
                        name: "Doloremque",
                        content:
                            "In hac habitasse platea dictumst. Sed quis eros suscipit, tristique augue quis"
                    }
                ]
            },
            2: {
                name: "chat-2",
                messages: [
                    {
                        name: "Voluptatum",
                        content:
                            "Rerum totam dicta error, doloremque officiis rem molestias asperiores cupiditate,"
                    },
                    {
                        name: "Aspernatur",
                        content:
                            "Veritatis aliquam eaque provident voluptatum fuga?"
                    }
                ]
            },
            3: {
                name: "chat-3",
                messages: [
                    {
                        name: "Velit",
                        content:
                            "Velit quia id omnis incidunt fugit dolores hic, aperiam perspiciatis quidem natus."
                    }
                ]
            }
        }
    };

    sendNewMessage = message => {
        this.setState(prevState => {
            return { messages: prevState.messages.concat([message]) };
        });
    };

    componentDidUpdate() {
        const name = this.state.messages[this.state.messages.length - 1].name;
        if (name != "Robot") {
            setTimeout(
                () =>
                    this.sendNewMessage({
                        name: "Robot",
                        content: "Hello, human," + name + "."
                    }),
                1000
            );
        }
    }

    render() {
        const { chats } = this.state;
        return (
            <div className="messenger">
                <ChatList chats={chats} />
                {/* <MessageList messages={chats}></MessageList> */}
                <MessengerForm onSendMessage={this.sendNewMessage} />
            </div>
        );
    }
}
