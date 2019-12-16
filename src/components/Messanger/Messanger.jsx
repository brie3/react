import React, { Component } from "react";
import { List, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { Message } from "../Message/Message";
import { MessengerForm } from "../MessengerForm/MessengerForm";
import { ChatForm } from "../ChatForm/ChatForm";
import("./Messenger.sass");

export class Messenger extends Component {
    state = {
        chats: {
            0: {
                title: "chat-0",
                messageIDs: [0, 1]
            },
            1: {
                title: "chat-1",
                messageIDs: [2, 3]
            },
            2: {
                title: "chat-2",
                messageIDs: [4]
            }
        },
        messages: {
            0: {
                name: "Vasia Pupkine",
                content:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            },
            1: {
                name: "Doloremque",
                content:
                    "In hac habitasse platea dictumst. Sed quis eros suscipit, tristique augue quis"
            },
            2: {
                name: "Voluptatum",
                content:
                    "Rerum totam dicta error, doloremque officiis rem molestias asperiores cupiditate,"
            },
            3: {
                name: "Aspernatur",
                content: "Veritatis aliquam eaque provident voluptatum fuga?"
            },
            4: {
                name: "Velit",
                content:
                    "Velit quia id omnis incidunt fugit dolores hic, aperiam perspiciatis quidem natus."
            }
        }
    };
    botTimers = [];
    lastName = "";
    sendNewMessage = message => {
        this.botTimers.forEach(timer => clearTimeout(timer));
        this.botTimers = [];
        this.lastName = message.name;
        let { id } = this.props.match.params;
        id = id ? id : "0";
        if (id !== message.chatID) {
            return;
        }
        this.setState(prevState => {
            let { chats, messages } = prevState;
            let messageID = Object.keys(prevState.messages).length;
            messages[messageID] = {
                name: message.name,
                content: message.content
            };
            chats[id].messageIDs.push(messageID);
            return {
                chats: chats,
                messages: messages
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
    componentDidUpdate() {
        let { id } = this.props.match.params;
        id = id ? id : "0";
        if (this.lastName === "" || this.lastName === "Robot") {
            return;
        }
        this.botTimers.push(
            setTimeout(
                () =>
                    this.sendNewMessage({
                        chatID: id,
                        name: "Robot",
                        content: `Hello, human, ${this.lastName}. I'm a robot from chat ${id}`
                    }),
                1000
            )
        );
    }

    render() {
        const { chats, messages } = this.state;
        let { id } = this.props.match.params;
        id = id ? id : "0";

        const messageList = chats[id].messageIDs.map((messageID, index) => (
            <Message
                key={index}
                name={messages[messageID].name}
                content={messages[messageID].content}
            />
        ));
        const chatList = Object.entries(chats).map((item, index) => (
            <Link to={`/chats/${item[0]}`} key={index}>
                <ListItemText primary={item[1].title} />
            </Link>
        ));
        return (
            <div className="messenger">
                <Header id={id} />
                <List className="chat-list">{chatList}</List>
                <ChatForm onSubmit={this.onAddChat} />
                <div className="message-list">{messageList}</div>
                <MessengerForm
                    chatID={id}
                    onSendMessage={this.sendNewMessage}
                />
            </div>
        );
    }
}
