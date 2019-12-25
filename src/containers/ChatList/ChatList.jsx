import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { List, ListItem } from "@material-ui/core";
import { ChatForm } from "../../components/ChatForm/ChatForm";
import { addChat } from "../../actions/chatActions";
import PropTypes from "prop-types";
import("./ChatList.sass");

export class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired
    };
    handleNavigate = link => {
        this.props.push(link);
    };
    render() {
        //console.log(this.props);
        const { chats } = this.props;
        const list = chats
            ? Object.keys(chats).map(id => (
                  <ListItem
                      key={id}
                      onClick={() => this.handleNavigate(`/chats/${id}`)}
                  >
                      {chats[id].title}
                  </ListItem>
              ))
            : "";
        return (
            <div className="chat-container">
                <List className="chat-list">{list}</List>
                <ChatForm onSubmit={this.props.addChat} />
            </div>
        );
    }
}
const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
