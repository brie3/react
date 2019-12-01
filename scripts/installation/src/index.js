import React from "react"
import ReactDOM from "react-dom"

const messages = [
    {
        id: 0,
        name: "Vasia Pupkine",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        id: 1,
        name: "Doloremque",
        content: "In hac habitasse platea dictumst. Sed quis eros suscipit, tristique augue quis"
    },
    {
        id: 2,
        name: "Voluptatum",
        content: "Rerum totam dicta error, doloremque officiis rem molestias asperiores cupiditate,"
    },
    {
        id: 3,
        name: "Aspernatur",
        content: "Veritatis aliquam eaque provident voluptatum fuga?"
    },
    {
        id: 4,
        name: "Velit",
        content: "Velit quia id omnis incidunt fugit dolores hic, aperiam perspiciatis quidem natus."
    }
]

const Message = (props) => <div><b>{props.name}</b>: {props.content}</div>
const MessageList = function(props){
    return props.messages.map(item => <Message name={item.name} content={item.content} key={item.id}/>)
}
ReactDOM.render(<MessageList messages={messages} />, document.getElementById("root"))