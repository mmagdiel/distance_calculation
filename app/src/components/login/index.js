import React, { Component } from 'react'
import { MyInput } from '../fields'
import { Field, reduxForm } from 'redux-form'

class LoginForm extends Component {
    render () {
        const { handleSubmit } = this.props
        return (<>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <Field 
                        name="username"
                        component={MyInput}
                        type="text"
                        label="Username"
                    />
                    <Field 
                        name="password"
                        component={MyInput}
                        type="text"
                        label="Password"
                    />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}


LoginForm = reduxForm({
    form: 'login',
})(LoginForm)
  
export default LoginForm