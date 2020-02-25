import React from 'react'
// import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'


class Login extends React.Component{

// const [state, setState] = useState({
//     username: '',
//     password: ''
// })

// const [isLoading, setIsLoading] = useState(false)


state = {
    credentials:{
        username: '',
        password: '',
    },
    isLoading: false
}




handleChange = e =>{
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
}

login = e =>{
    e.preventDefault()
    this.setState({...this.state, isLoading:true})
    axios
    .post('http://localhost:5000/api/login', this.state.credentials)
    .then(res =>{
        console.log('props', this.props)
        console.log('login resoponse', res)
        this.setState({...this.state, isLoading:false})
        window.localStorage.setItem('token', res.data.payload )
        this.props.history.push('/friendslist')
    })
    .catch(err =>{
        console.log('login error', err)
    })
}

render(){
    return(
        <div>
            <form onSubmit = {this.login}>
            <input
                type = 'text'
                name = 'username'
                value = {this.state.credentials.value}
                onChange = {this.handleChange}
            />

            <input
                type = 'password'
                name = 'password'
                value = {this.state.credentials.value}
                onChange = {this.handleChange}
            />
            <button>Log In</button>

            </form>
        </div>
    )
}



}

export default Login