import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { UserContext } from "../UserContext";
import("./Message.sass");

export const messageType = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
export class Message extends Component {
    static propTypes = messageType;
    static contextType = UserContext;
    render() {
        const { name, content } = this.props;
        const msgClass = classNames("message", {
            "message-person": name !== "Robot"
        });
        return (
            <div className={msgClass}>
                <b>{name}</b>: {content}
                <b>{this.context.user.name}</b>
            </div>
        );
    }
}
