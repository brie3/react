import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import("./Header.sass");

export function Header({ chatID, chats }) {
    let title = chats[chatID]
        ? capitalizeFirstLetter(chats[chatID].title)
        : "Chat";
    return (
        <Toolbar className="header">
            <Link to={"/profile"}>
                <Typography variant="h6">{title}</Typography>
            </Link>
        </Toolbar>
    );
}

Header.propTypes = {
    chatID: PropTypes.string,
    chats: PropTypes.object
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
