import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import { List, ListItem } from "@material-ui/core";
import { ChatForm } from "../ChatForm/ChatForm";
import { addChat } from "../../actions/chatActions";
import PropTypes from "prop-types";
import("./ChatList.sass");

export class ChatList extends Component {
    static propTypes = {
        push: PropTypes.func.isRequired,
        chats: PropTypes.object.isRequired
    };
    render() {
        console.log(this.props.push);
        const list = Object.keys(this.props.chats).map(id => (
            <ListItem button key={id} onClick={this.props.push(`/chats/${id}`)}>
                {this.props.chats[id].title}
            </ListItem>
        ));
        return (
            <div className="chat-container">
                <List className="chat-list">{list}</List>
                <ChatForm onSubmit={addChat} />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    chats: state.chat.chats
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
