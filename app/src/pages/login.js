import React, { Component } from 'react'
import LoginForm from '../components/login'
import axios from 'axios'
//headers.append('Access-Control-Allow-Credentials', 'true')
//headers.append('Access-Control-Allow-Origin', 'http://localhost:3000')
//let headers= new Headers()
//headers.append('Content-Type', 'application/json')
//headers.append('Accept', 'application/json')
//headers.append('Origin','http://localhost:3000')
/*
        const url = 'http://localhost:8000/login'
        const opts = {
            mode: 'no-cors',
            method: 'POST', 
            body: values,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
            }
        }
        fetch(url, opts)
            .then((response) => console.log(response))
*/
export default class Login extends Component {  
    submit = values => {
        console.log(values)
        const url = '/login'
        axios({
            url,
            data: values,
            method: 'post',
            baseURL: 'http://localhost:8000',
            headers: {'Access-Control-Allow-Origin': 'http://localhost:8000/'}
        }).then(function (response) {
            console.log(response)
        })
        //then((myJson) => console.log(myJson))
        //                'Access-Control-Allow-Credentials': 'true',
        //credentials: "same-origin",
        /*
        console.log(url)

        console.log(opts)
        window.alert(
            JSON.stringify(values, null, 4)
        )
        */
    }

    render() {
        return <LoginForm onSubmit={this.submit} />
    }
}