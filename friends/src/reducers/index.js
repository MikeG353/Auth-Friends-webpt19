import {
    GET_FRIENDS_LIST_START,
    GET_FRIENDS_LIST_SUCCESS,
    GET_FRIENDS_LIST_FAIL,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAIL
} from '../actions'

const initialFriendsList = {
    friends: [],
    fetching: false,
    error: ''
}

function friendsListReducer(state = initialFriendsList, action) {
    switch (action.type) {
        case GET_FRIENDS_LIST_START:
            return {
                ...state,
                fetching: true
            }
        case GET_FRIENDS_LIST_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                fetching: false
            }
        case GET_FRIENDS_LIST_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case ADD_FRIEND_START:
            return {
                ...state,
                fetching: true
            }
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                fetching: false
            }
        case ADD_FRIEND_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default friendsListReducer