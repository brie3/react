import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import PropTypes from "prop-types";

export class MessengerForm extends Component {
    state = {
        author: "",
        content: ""
    };
    static propTypes = {
        onSendMessage: PropTypes.func.isRequired
    };
    sendHandle = () => {
        this.props.onSendMessage({
            name: this.state.author,
            content: this.state.content
        });
    };
    changeHandle = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    keyDownHandle = event => {
        if (event.keyCode === 13 && event.ctrlKey) {
            this.sendHandle();
        }
    };
    render() {
        const { author, content } = this.state;
        return (
            <div>
                <TextField
                    id="standard-basic"
                    label="Author"
                    name="author"
                    value={author}
                    onChange={this.changeHandle}
                />
                <TextField
                    id="standard-basic"
                    label="Message"
                    name="content"
                    value={content}
                    onChange={this.changeHandle}
                    ref={this.textareaRef}
                    onKeyDown={this.keyDownHandle}
                    autoFocus
                />
                <Button
                    onClick={this.sendHandle}
                    variant="contained"
                    color="primary"
                >
                    Send Message
                </Button>
            </div>
        );
    }
}
