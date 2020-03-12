import React from 'react'
import './Tweet.css'

function Tweet(props) {
    return (
        <div className='tweet'>
            <h2>{props.name}</h2>
            <p>{props.message}</p>
            <h3>Number of likes: {props.likes}</h3>
        </div>
    )
}

export default Tweet
