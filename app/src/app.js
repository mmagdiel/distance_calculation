import React, { Component } from 'react'
import Login from './pages/login'
import Search from './components/search'
import { Route, Switch } from 'react-router-dom'

export default class App extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/search" component={Search}/>
                </Switch>
            </main>
        )
    }
}