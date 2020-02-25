import React, {useEffect, useState} from 'react'
import FriendForm from './FriendForm'
import {axiosWithAuth} from '../utils/axiosWithAuth'

function FriendList(){

const [state, setState]=useState()

useEffect(()=>{
    axiosWithAuth()
    .get('/api/friends')
    .then(res =>{
        console.log('axios call', res)
        setState(res.data)
    })
    .catch(err =>{
        console.log('this is not a drill', err)
    })
}, [])
console.log('state', state)
    return(
        <div>
            {state && state.map(e =>(
                <div key = {e.id}>
                    <p>Name: {e.name}</p>
                    <p>Age: {e.age}</p>
                    <p>Email: {e.email}</p>
                </div>
            ))}


            <FriendForm/> 
        </div>
    )
}

export default FriendList