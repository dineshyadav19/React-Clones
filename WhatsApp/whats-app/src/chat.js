import React, { useState } from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined, MoreVert, KeyboardVoice, InsertEmoticon } from "@material-ui/icons";
import "./chat.css"
import axios from "./axios"

export default function Chat({ messages }) {
    
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            name: "Demo App",
            message: input,
            timestamp: "Just now!",
            received: false,
        })

        setInput('');
    }

    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyWkzvsbqOEnH1XMhm6GhsL6BNcQmg31Ezg&usqp=CAU"/>
                <div className="chat__headerinfo">
                    <h3>Room name</h3>
                    <p>last seen at...</p>
                </div>
                <div className="chat__headerright">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
            { messages.map((message) => (
                <p className={`chat__message ${message.received && "chat__receiver"}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">
                        {message.timestamp}
                    </span>
                </p>
            ))}
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton> 
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text"/>
                    <button onClick = { sendMessage } type="submit">Send a message</button>
                </form>
                <IconButton>
                    <KeyboardVoice />
                </IconButton>   
            </div>
        </div>
    )
}
