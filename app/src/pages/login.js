import React, { Component } from 'react'
import LoginForm from '../components/login'
import axios from 'axios'

export default class Login extends Component {  
    submit = values => {
        const url = '/login'
        axios({
            url,
            data: values,
            method: 'post',
            baseURL: 'http://localhost:8000',
            headers: { 'Content-Type': 'application/json' }
        }).then( ({ data }) => {
            const { passed } = data
            if (passed) { 
                console.log('Gotcha') 
                const { history } = this.props
                history.push('/search')
            } else {
                console.log('Nooooo')
            }       
        }).catch( (error) => {
            console.log(error)
        })
    }

    render() {
        return <LoginForm onSubmit={this.submit} /> 
    }
}