import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/login'
import Search from './components/search'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
    form: formReducer
}

const reducer = combineReducers(reducers)

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={Login}/>
                <Route path="/search" component={Search}/>
            </div>
        </BrowserRouter>
    </Provider>
    ), document.getElementById('root'))