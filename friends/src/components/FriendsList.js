import React, { useEffect } from 'react'
import { baseURL, axiosWithAuth } from "../api/axiosWithAuth"
import { connect } from 'react-redux'
import { getFriends } from '../actions'

// Components
import FriendForm from './FriendForm'
import Friend from './Friend'

const FriendsList = props => {
    useEffect(() => {
        props.getFriends()
    }, [])
    
    return(
        <>
            <FriendForm />
            {
                props.friends.map(friend => {
                    return <Friend friend={friend} key={friend.id} />
                })
            }
        </>
    )    
}
const mapStateToProps = (state) => {
    return {
        friends: state.friends
    }
}
export default connect(mapStateToProps, { getFriends })(FriendsList)