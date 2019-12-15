import React, { Component } from "react";
import { List, ListItemText } from "@material-ui/core";
import PropTypes from "prop-types";
import("./ChatList.sass");

export class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.array
    };
    render() {
        return (
            <List className="chatlist">
                {this.props.chats.forEach((item, index) => {
                    <ListItemText primary={item.name} key={index} />;
                })}
            </List>
        );
    }
}
