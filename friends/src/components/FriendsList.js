import React from 'react'
import { baseURL, axiosWithAuth } from "../api/axiosWithAuth"

// Components
import FriendForm from './FriendForm'
import Friend from './Friend'

class FriendsList extends React.Component {
    state = {
        friends: []
    }
    componentDidMount() {
        this.getFriends()
    }
    getFriends = () => {
        axiosWithAuth()
            .get(`${baseURL}/friends`)
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => {
                if(err.response) {
                    console.error(
                        "Unable to retrieve friends list: ", err.response.data
                    );
                } else {
                    console.error("Server response error: ", err)
                }
            })
    }
    render() {
        return(
            <>
                <FriendForm />
                {
                    this.state.friends.map(friend => {
                        return <Friend friend={friend} key={friend.id} />
                    })
                }
            </>
        )
    }
}
export default FriendsList