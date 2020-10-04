import axios from 'axios'

export const baseURL = "http://localhost:5000/api"
export const axiosWithAuth = () => {
    const token = localStorage.getItem("login-token")
    
    return axios.create({
        headers: {
            Authorization: token
        },        
    })
}
