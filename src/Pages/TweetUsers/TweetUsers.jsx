import React from 'react'
import Tweet from '../Tweet/Tweet'
import './TweetUsers.css'

function TweetUsers() {

    const Users = [
        {
            id: 1,
            name: 'Roger',
            message: 'Hello it is wednesday my duuuuude',
            likes: 122
        },
        {
            id: 2,
            name: 'John Snow',
            message: 'I im the king in the north',
            likes: 807
        },
        {
            id: 3,
            name: 'Lolito',
            message: 'Qe pasa gente soy lolito',
            likes: '2k'
        },
        {
            id: 4,
            name: 'Alice',
            message: 'Jill Valentine is my friend',
            likes: '66k'
        }
    ]

    const getUsers = Users.map((user) => {
        return <Tweet key={user.id} name={user.name} message={user.message} likes={user.likes} />
    })

    return (
        <div className='users'>
            {getUsers}
        </div>
    )

}

export default TweetUsers
