import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelContainer, ChannelListContainer } from './components'

import './App.css'

const apiKey = process.env.REACT_APP_STREAM_API

const chatClient = StreamChat.getInstance(apiKey); 

const App = () => {
    return (
        <div className='app__wrapper'>
            <Chat client={chatClient} theme='team light'>
                <ChannelListContainer />
            </Chat>
        </div>
    )
}

export default App

