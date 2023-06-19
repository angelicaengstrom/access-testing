import React, { Component, useEffect, useState } from 'react'
import isUrl from 'is-url'

export class Form extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            url : localStorage.getItem('url'),
            login : 2,
            username : localStorage.getItem('username'),
            password : localStorage.getItem('password')
        }
    }
    handleUrlChange = (event) => {
        this.setState({
            url : event.target.value
        })
    }

    radioHandler = (login) => {
        this.setState({ login });
    };

    usernameHandler = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password : event.target.value
        })
    }

    handleTest = (event) => {
        localStorage.setItem('url', this.state.url)
        if(this.state.login === 1){
            localStorage.setItem('username', this.state.username)
            localStorage.setItem('password', this.state.password)
        }else{
            localStorage.setItem('username', '')
            localStorage.setItem('password', '')
        }
        window.open("/", "_self")
        event.preventDefault()
    }
    
    render() {
        return (
        <form onSubmit={this.handleTest}>
            <div class="url-content">
                <label for="url">Ange URL:</label>
                <input id="url" type="text" value={this.state.url} onChange={this.handleUrlChange} placeholder="http://google.com"/>
            </div>
            <div class="radio-content">
                <legend>Krävs inlogg?</legend>
                <div>
                <label for="login1">Ja</label>
                <input id="login1" type="radio" checked={this.state.login === 1} onClick={(e) => this.radioHandler(1)}/*onChange={this.handleRadioChange}*//>
                </div>
                <div>
                <label for="login2">Nej</label>
                <input id="login2" type="radio" checked={this.state.login === 2} onClick={(e) => this.radioHandler(2)}/*onChange={this.handleRadioChange}*//>
                </div>
            </div>
            {this.state.login === 1 ? (
            <div class="login-content">
                <label for="username">Användarnamn</label>
                <input id="username" type="text" placeholder="Email, telefonnummer etc." value={this.state.username} onChange={this.usernameHandler}/>
                <label for="password">Lösenord</label>
                <input id="password" type="password" placeholder="testson123" value={this.state.password} onChange={this.passwordHandler}/>
            </div>) : ('')}
            <button>Kör tester</button>
        </form>
        )
    }
}

export default Form