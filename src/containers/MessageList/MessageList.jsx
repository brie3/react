import React, { Component } from "react";
import { Message } from "../../components/Message/Message";
import { MessageForm } from "../../components/MessageForm/MessageForm";
import { sendMessage } from "../../actions/messageActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import("./MessageList.sass");

export class MessageList extends Component {
    static propTypes = {
        chatID: PropTypes.string,
        chats: PropTypes.object,
        messages: PropTypes.object,
        sendMessage: PropTypes.func
    };
    handleSendMessage = message => {
        this.props.sendMessage(this.props.chatID, message);
    };
    render() {
        const { chatID, chats, messages } = this.props;
        const list = chats[chatID]
            ? chats[chatID].messageIDs.map(id => (
                  <Message key={id} {...messages[id]} />
              ))
            : "";
        return (
            <div className="message-container">
                <div className="message-list">{list}</div>
                <MessageForm onSubmit={this.handleSendMessage} />
            </div>
        );
    }
}
const mapStateToProps = ({ chatReducer }) => {
    const { chats, messages } = chatReducer;
    return {
        chats: chats,
        messages: messages
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
