import React, { Component } from "react";
import { Header } from "../Header/Header";
import { ChatList } from "../ChatList/ChatList";
import { MessageList } from "../MessageList/MessageList";
import("./Messenger.sass");

export class Messenger extends Component {
    render() {
        const {
            chatID,
            chats,
            messages,
            addChat,
            profile,
            sendMessage
        } = this.props;
        return (
            <div className="messenger">
                <Header chatID={chatID} chats={chats} profile={profile} />
                <ChatList chats={chats} onSubmit={addChat} />
                {chatID && (
                    <MessageList
                        chatID={chatID}
                        messages={messages}
                        onSubmit={sendMessage}
                    />
                )}
            </div>
        );
    }
}
