import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import("./Header.sass");

export function Header({ chatID, chats }) {
    let title = chats ? chats[chatID]["title"] : "Chat";
    console.log(chatID);
    return (
        <Toolbar className="header">
            <Link to={"/profile"}>
                <Typography variant="h6">{title}</Typography>
            </Link>
        </Toolbar>
    );
}
