import React from 'react'
import axios from 'axios'
import { baseURL } from '../api/axiosWithAuth'

class LoginForm extends React.Component {
    // login form state
    state = {
        credentials: {
            username:"",
            password:""
        }
    };

    // cnahge handler for form
    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    // login function
    login = (e) => {
        e.preventDefault()
        axios
            .post(`${baseURL}/login`, this.state.credentials)
            .then(res => {
                localStorage.setItem("login-token", res.data.payload)
                this.props.history.push("/friends")
            })
            .catch(err => {
                if(err.response) {
                    console.error(
                        "Login error: ", err.response.data
                    );
                } else {
                    console.error("Login failed: err: ", err)
                }
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}
export default LoginForm