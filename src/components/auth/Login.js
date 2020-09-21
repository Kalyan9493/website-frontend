import React, { PureComponent } from 'react'
import axios from 'axios'
import './Login.css'

class Login extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            loginErrors: '',
            visible: 'hidden'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    handleSubmit(event){
        console.log('Form Submitted')
        event.preventDefault()
        axios.get(`http://localhost:8080/users/login?username=${this.state.username}&password=${this.state.password}`).then( response => console.log(response)).catch( error => console.log(error))
    }

    render() {
        return (
            <div className = 'login'>
                <form className = 'loginForm' onSubmit = {this.handleSubmit}>
                    <input type = 'text' name = 'username' placeholder = 'Enter Your Username' value = {this.state.username} onChange = {this.handleChange} required></input><p></p>
                    <input type= 'password' name = 'password' placeholder = 'Enter Your Password' value = {this.state.password} onChange = {this.handleChange} required></input>
                    <button className = 'button'  type = 'submit'>Login</button>
                </form>
            </div>          
        )
    }
}

export default Login