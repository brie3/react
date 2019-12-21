import React, { Component } from "react";
import { Messenger } from "../components/Messenger/Messenger";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { loadMessages, sendMessage } from "../actions/messageActions";

class MessengerContainer extends Component {
    static propTypes = {
        chatID: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired
        // messages: PropTypes.arrayOf(PropTypes.shape(messageType))
    };
    componentDidMount() {
        this.props.loadChats();
    }
    handleSendMessage = message => {
        this.props.sendMessage(this.props.chatID, message);
    };
    render() {
        return (
            <Messenger
                messages={this.props.messages}
                onSendMessage={this.handleSendMessage}
            />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return {
        chats: state.messages.chats,
        messages: state.messages.chats[id] && state.messages.chats[id],
        chatID: id
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadMessages, sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
