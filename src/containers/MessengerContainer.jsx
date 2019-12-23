import React, { Component } from "react";
import { Messenger } from "../components/Messanger/Messanger";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addChat, loadChats, sendMessage } from "../actions/chatActions";
import { loadProfile } from "../actions/profileActions";

class MessengerContainer extends Component {
    componentDidMount() {
        this.props.loadChats();
        this.props.loadProfile();
    }
    render() {
        return <Messenger {...this.props} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return {
        chatID: id,
        chats: state.chat.chats,
        messages:
            state.chat.chats[id] &&
            state.chat.chats[id]["messageIDs"].map(
                id => state.chat.messages[id]
            ),
        profile: state.profile.profile
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { addChat, loadChats, sendMessage, loadProfile },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
