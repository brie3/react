import React, { Component } from "react";
import { Header } from "../Header/Header";
import { ChatList } from "../ChatList/ChatList";
import { MessageList } from "../MessageList/MessageList";
import PropTypes from "prop-types";
import("./Messenger.sass");

export class Messenger extends Component {
    botTimers = [];
    lastName = "";
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string
            })
        })
    };
    onAddMessage = message => {
        this.botTimers.forEach(timer => clearTimeout(timer));
        this.botTimers = [];
        this.lastName = message.name;
        let { id } = this.props.match.params;
        if (id !== message.chatID) {
            return;
        }
        this.setState(prevState => {
            let { chats, messages } = prevState;
            let messageID = Object.keys(prevState.messages).length;
            return {
                messages: {
                    ...messages,
                    [messageID]: {
                        name: message.name,
                        content: message.content
                    }
                },
                chats: {
                    ...chats,
                    [message.chatID]: {
                        ...chats[message.chatID],
                        messageIDs: [
                            ...chats[message.chatID]["messageIDs"],
                            messageID
                        ]
                    }
                }
            };
        });
    };
    onAddChat = title => {
        this.setState(prevState => {
            let { chats } = prevState;
            let chatID = Object.keys(chats).length;
            chats[chatID] = {
                title: title ? title : `chat-${chatID}`,
                messageIDs: new Array()
            };
            return { chats };
        });
    };
    /* componentDidUpdate() {
        if (this.lastName === "" || this.lastName === "Robot") {
            return;
        }
        let { id } = this.props.match.params;
        this.botTimers.push(
            setTimeout(
                () =>
                    this.onAddMessage({
                        chatID: id,
                        name: "Robot",
                        content: `Hello, human, ${this.lastName}. I'm a robot from chat ${id}`
                    }),
                1000
            )
        );
    } */

    render() {
        const { id, chats, messages } = this.props;
        console.log(messages);
        return (
            <div className="messenger">
                <Header id={id} />
                <ChatList chats={chats} onSubmit={this.props.onAddChat} />
                <MessageList
                    chatID={id}
                    messages={messages}
                    onSubmit={this.props.onSendMessage}
                />
            </div>
        );
    }
}
