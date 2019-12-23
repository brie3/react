import React, { useState } from "react";
import { Fab, TextField } from "@material-ui/core";
import { ChatBubble } from "@material-ui/icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import PropTypes from "prop-types";
import("./ChatForm.sass");

export function ChatForm({ onSubmit }) {
    const [chatName, setChatName] = useState("");
    return (
        <div className="chat-form">
            <TextField
                label="Add New Chat"
                value={chatName}
                onChange={e => setChatName(e.target.value)}
            />
            <Fab
                onClick={() => {
                    onSubmit(chatName);
                    setChatName("");
                }}
                size="small"
                color="primary"
            >
                <ChatBubble fontSize="small" />
            </Fab>
        </div>
    );
}

ChatForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
