import React, { useState } from 'react'

import SearchIcon from '../assets/SearchIcon'

const ChannelSearch = () => {

    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('');

    const onSearch = (event) => {
        event.preventDefault()

        setLoading(true)
        setQuery(event.target.value)
        getResults(event.target.value)
    }

    const getResults = async (text) => {
        try {
            //TODO: fetch results
        } catch (error) {
            setQuery('')
            console.log(error)
        }
    }

    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <SearchIcon />
                </div>
                <input 
                type="text"
                placeholder='Search'
                className='channel-search__input__text' 
                value={query}
                onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default ChannelSearch
 
