import { axiosWithAuth, baseURL } from '../api/axiosWithAuth'
import axios from 'axios'

export const GET_FRIENDS_LIST_START = 'GET_FRIENDS_LIST_START'
export const GET_FRIENDS_LIST_SUCCESS = 'GET_FRIENDS_LIST_SUCCESS'
export const GET_FRIENDS_LIST_FAIL = 'GET_FRIENDS_LIST_FAIL'
export const ADD_FRIEND_START = 'ADD_FRIEND_START'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_FAIL = 'ADD_FRIEND_FAIL'


export const getFriends = () => (dispatch) => {
    dispatch({ type: GET_FRIENDS_LIST_START })
    axiosWithAuth()
        .get(`${baseURL}/friends`)
        .then(res => {
           dispatch({ type: GET_FRIENDS_LIST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_FRIENDS_LIST_FAIL, payload: err })
        })
}

export const addFriend = (newfriend) => (dispatch) => {
    dispatch({ type: ADD_FRIEND_START })
        axiosWithAuth()
        .post(`${baseURL}/friends`, newfriend)
        .then(res => {
            dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_FRIEND_FAIL, payload: err })
        })
}

