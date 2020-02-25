import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class FriendForm extends React.Component {
    state = {
            name: '',
            age: '',
            email: '',
    }


handleChange = e => {
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    })
}

add_user = e =>{
    e.preventDefault()
    axiosWithAuth()
    .post('api/friends', this.state)
    .then(res =>{
        console.log('posted friend', res)
    })
    .catch(err => {
        console.log('oops', err)
    })
}


render(){
    return(
        <div>
            <form onSubmit={this.add_user}>
                <input
                type = 'text'
                name = 'name'
                value = {this.state.name}
                onChange = {this.handleChange}
                />

                <input
                type = 'text'
                name = 'age'
                value = {this.state.age}
                onChange = {this.handleChange}
                />

                <input
                type = 'text'
                name = 'email'
                value = {this.state.email}
                onChange = {this.handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

}


export default FriendForm