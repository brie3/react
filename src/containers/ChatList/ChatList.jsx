import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { List } from "@material-ui/core";
import { Chat } from "../Chat/Chat";
import { ChatForm } from "../../components/ChatForm/ChatForm";
import { addChat, deleteChats } from "../../actions/chatActions";
import { loadState } from "../../actions/apiActions";
import PropTypes from "prop-types";
import("./ChatList.sass");

export class ChatList extends Component {
    static propTypes = {
        chatID: PropTypes.string,
        loadState: PropTypes.func.isRequired,
        chats: PropTypes.object,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
        deleteChats: PropTypes.func.isRequired,
        isChatsLoading: PropTypes.bool
    };
    componentDidMount() {
        this.props.loadState();
    }
    handleNavigate = link => {
        this.props.push(link);
    };
    render() {
        const { chatID, chats, isChatsLoading } = this.props;
        const list = Object.keys(chats);
        return (
            <div className="chat-container">
                <List className="chat-list">
                    {!isChatsLoading &&
                        list.map(id => (
                            <Chat
                                id={id}
                                key={id}
                                chatID={chatID}
                                onNavigate={this.handleNavigate}
                                title={chats[id].title}
                                notice={chats[id].notice}
                            />
                        ))}
                </List>
                <ChatForm
                    onSubmit={this.props.addChat}
                    onDelete={this.props.deleteChats}
                />
            </div>
        );
    }
}
const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    isChatsLoading: chatReducer.isChatsLoading
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ addChat, push, deleteChats, loadState }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
