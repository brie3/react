import React from "react";
import { Link } from "react-router-dom";
import { List, ListItemText } from "@material-ui/core";
import { ChatForm } from "../ChatForm/ChatForm";
import PropTypes from "prop-types";
import("./ChatList.sass");

export function ChatList({ chats, onSubmit }) {
    const chatList = Object.keys(chats).map(id => (
        <Link to={`/chats/${id}`} key={id}>
            <ListItemText primary={chats[id].title} />
        </Link>
    ));

    return (
        <div className="chat-container">
            <List className="chat-list">{chatList}</List>
            <ChatForm onSubmit={onSubmit} />
        </div>
    );
}

ChatList.propTypes = {
    chats: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
};
