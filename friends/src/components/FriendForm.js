import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addFriend } from '../actions'

const FriendForm = (props) => {
    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name:'',
        age:'',
        email:''
    })

    const handleChanges = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addFriend(newFriend)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={newFriend.name}
                        onChange={handleChanges}
                    />
                    <input
                        type="age"
                        name="age"
                        value={newFriend.age}
                        onChange={handleChanges}
                    />
                    <input
                        type="email"
                        name="email"
                        value={newFriend.email}
                        onChange={handleChanges}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
    )
}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
export default connect(mapStateToProps, {addFriend})(FriendForm)