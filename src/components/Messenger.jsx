import React, {Component} from "react";
import {Message} from "./Message";

export class Messenger extends Component{
    state = { messages: [
        {
            name: "Vasia Pupkine",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            name: "Doloremque",
            content: "In hac habitasse platea dictumst. Sed quis eros suscipit, tristique augue quis"
        },
        {
            name: "Voluptatum",
            content: "Rerum totam dicta error, doloremque officiis rem molestias asperiores cupiditate,"
        },
        {
            name: "Aspernatur",
            content: "Veritatis aliquam eaque provident voluptatum fuga?"
        },
        {
            name: "Velit",
            content: "Velit quia id omnis incidunt fugit dolores hic, aperiam perspiciatis quidem natus."
        }
    ]}
    handleNewMessage = () =>{
        this.setState((prevState) =>{
            return {
                messages: prevState.messages.concat([{
                    name: "Test",
                    content: "Нормально"
                }])
            };
        });
    }
    render(){
        const messagesList = this.state.messages.map((item, index) => (
            <Message name={item.name} content={item.content} key={index} />
        ));
        return (
            <div>
                {messagesList}
                <button onClick={this.handleNewMessage}>New Message</button>
            </div>
            
        );
    }
}