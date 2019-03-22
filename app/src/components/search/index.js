import React, { Component } from 'react'
import { MyInput } from '../fields'
import { Field, reduxForm } from 'redux-form'
import axios from 'axios'
import DisplayData from '../displayData'

class SearchForm extends Component {
    state = {
        flag: false,
        destination: {},
        distance: {}, 
        duration: {}, 
        origin: {}
    }

    render () {
        const { handleSubmit } = this.props
        return (<>
                <h1>Search Address</h1>
                <form onSubmit={handleSubmit}>
                    <Field 
                        name="description"
                        component={MyInput}
                        type="text"
                        label="Description"
                    />
                    <Field 
                        name="originAddress"
                        component={MyInput}
                        type="text"
                        label="Origin Address"
                    />
                    <Field 
                        name="destinyAddress"
                        component={MyInput}
                        type="text"
                        label="Destiny Address"
                    />
                    <button
                        onClick={handleSubmit(
                            data => {
                                const url = '/travel'
                                axios({
                                    url,
                                    data,
                                    method: 'post',
                                    baseURL: 'http://localhost:8000',
                                    headers: { 'Content-Type': 'application/json' }
                                }).then( ({ data }) => {
                                    const { destination, distance, duration, origin } = data
                                    this.setState({ destination, distance, duration, origin, flag:true })
                                }).catch( (error) => {
                                    console.log(error)
                                })
                            })
                        } 
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                {
                    this.state.flag ? <DisplayData 
                        destination={ this.state.destination }
                        distance={ this.state.distance } 
                        duration={ this.state.duration }
                        origin={ this.state.origin }
                    /> : null
                }
            </>
        )
    }
}


SearchForm = reduxForm({
    form: 'search',
})(SearchForm)
  
export default SearchForm
