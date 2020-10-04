import React from 'react'
import { axiosWithAuth, baseURL } from '../api/axiosWithAuth'

class FriendForm extends React.Component {
    state = {
        friend: {
            id: undefined,
            name: '',
            age: '',
            email: ''
        }
    }
    handleChanges = e => {
        this.setState({
            friend: {
            ...this.state.friend,
            [e.target.name]: e.target.value
            }
        })
    }
    addFriend = e => {
        e.preventDefault()
        axiosWithAuth()
        .post(`${baseURL}/friends`, this.state.friend)
        .then(res => {
            console.log(res)
            this.setState({
                friends: res.data
            })
        })
        .catch(err => {
            if(err.response) {
                console.error(
                    "unable to add friend: error: ", err.response.data
                );
            } else {
                console.error("error adding friend: ", err)
            }
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addFriend}>
                        <input
                            type="text"
                            name="name"
                            value={this.state.friend.name}
                            onChange={this.handleChanges}
                        />
                        <input
                            type="age"
                            name="age"
                            value={this.state.friend.age}
                            onChange={this.handleChanges}
                        />
                        <input
                            type="email"
                            name="email"
                            value={this.state.friend.email}
                            onChange={this.handleChanges}
                        />
                        <button>Add Friend</button>
                    </form>
                </div>
        )
    }
}
export default FriendForm