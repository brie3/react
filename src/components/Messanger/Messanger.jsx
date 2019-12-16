import React, { Component } from "react";
import { ChatList } from "../ChatList/ChatList";
import { Header } from "../Header/Header";
import { MessageList } from "../MessageList/MessageList";
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
    botTimers = [];
    sendNewMessage = message => {
        const { id } = this.props.match.params;
        this.isNew = message.isNew;
        this.botTimers.forEach(timer => clearTimeout(timer));
        this.botTimers = [];

        this.setState(prevState => {
            let chats = prevState.chats;
            if (id !== message.chatID) {
                return;
            }
            chats[id].messages.push({
                name: message.name,
                content: message.content
            });
            return { chats };
        });
    };

    componentDidUpdate() {
        const { id } = this.props.match.params;
        const name = this.state.chats[id].messages[
            this.state.chats[id].messages.length - 1
        ].name;
        if (this.isNew) {
            this.botTimers.push(
                setTimeout(
                    () =>
                        this.sendNewMessage({
                            chatID: id,
                            isNew: false,
                            name: "Robot",
                            content: `Hello, human, ${name}. I'm a robot from chat ${id}`
                        }),
                    1000
                )
            );
        }
    }

    render() {
        const { chats } = this.state;
        let { id } = this.props.match.params;
        id = id ? id : "1";
        return (
            <div className="messenger">
                <Header id={id} />
                <ChatList chats={chats} />
                {chats[id] ? (
                    <MessageList messages={chats[id].messages}></MessageList>
                ) : (
                    "Переписка не найдена"
                )}
                {chats[id] && (
                    <MessengerForm
                        chatID={id}
                        onSendMessage={this.sendNewMessage}
                    />
                )}
            </div>
        );
    }
}
