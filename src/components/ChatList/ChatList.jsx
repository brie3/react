import React, { Component } from "react";
import { List, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import("./ChatList.sass");

export class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object
    };
    render() {
        return (
            <List className="chatlist">
                {Object.entries(this.props.chats).map((item, index) => (
                    <Link to={`/chats/${item[0]}`} key={index}>
                        <ListItemText primary={item[1].name} />
                    </Link>
                ))}
            </List>
        );
    }
}
