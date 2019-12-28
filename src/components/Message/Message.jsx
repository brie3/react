import React from "react";
import PropTypes from "prop-types";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import classNames from "classnames";
import("./Message.sass");

export function Message({ name, content, date, isNew, onDelete }) {
    const msgClass = classNames("message", {
        "message-person": name !== "Robot",
        "message-new": isNew
    });
    return (
        <div className={msgClass}>
            {content}
            <small>
                Created on {date} by {name}
            </small>
            <DeleteOutlinedIcon
                className="delete-icon"
                viewBox="0 0 24 24"
                onClick={onDelete}
            />
        </div>
    );
}
Message.propTypes = messageType;
export const messageType = {
    name: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    isNew: PropTypes.bool
};
