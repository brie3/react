import React from "react";
import ChatList from "../ChatList/ChatList";
import { Header } from "../Header/Header";
import { MessageList } from "../MessageList/MessageList";
import PropTypes from "prop-types";
import("./Messenger.sass");

export function Messenger({ chatID, chats, messages, profile, sendMessage }) {
    return (
        <div className="messenger">
            <Header chatID={chatID} chats={chats} profile={profile} />
            <ChatList />
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

Messenger.propTypes = {
    chatID: PropTypes.string,
    chats: PropTypes.object,
    messages: PropTypes.array,
    addChat: PropTypes.func,
    profile: PropTypes.object,
    sendMessage: PropTypes.func,
    push: PropTypes.func
};
