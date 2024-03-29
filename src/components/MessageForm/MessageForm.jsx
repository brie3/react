import React, { Component } from "react";
import { Fab, TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import PropTypes from "prop-types";
import("./MessageForm.sass");

export class MessageForm extends Component {
    state = {
        author: "",
        content: ""
    };
    static propTypes = {
        chatID: PropTypes.string,
        onSubmit: PropTypes.func.isRequired
    };
    handleSend = () => {
        this.props.onSubmit({
            name: this.state.author ? this.state.author : "Anonymous",
            content: this.state.content
        });
        this.setState({ content: "" });
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleKeyDown = event => {
        if (event.keyCode === 13 && event.ctrlKey) {
            this.handleSend();
        }
    };
    render() {
        const { author, content } = this.state;

        return (
            <div className="message-form">
                <TextField
                    label="Author"
                    name="author"
                    value={author}
                    onChange={this.handleChange}
                />
                <TextField
                    label="Message"
                    name="content"
                    value={content}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    autoFocus
                />
                <Fab
                    onClick={this.handleSend}
                    size="small"
                    color="primary"
                    label="Send Message"
                >
                    <Send fontSize="small" />
                </Fab>
            </div>
        );
    }
}
