import React, { useState }from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initialState={
    username: '',
    password: ''
}

export default function Login(){

  const [user, setUser]= useState(initialState)

  const history = useHistory()

  const  login = e => {
        e.preventDefault()

       axiosWithAuth()
       .post('/auth/login', user) 
       .then((res)=>{
        //    console.log('this is login:', res.data)
           localStorage.setItem('token', res.data.token)
           history.push('/home')
       })
       
       .catch((err)=>{
           console.log(err)
       })
    }

  const handleChange = e => {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
  }

return(
    <div>
        User Login
        <form onSubmit={login}>
            <label>Username
            <input
            type= 'text' 
            name= 'username'
            value= {user.username}
            onChange={handleChange}
            placeholder='username'
            />
            </label>Password
            <label>
            <input
             type= 'password' 
             name= 'password'
             value= {user.password}
             onChange={handleChange}
             placeholder='password'
            />
            </label>
            <button>Log In</button>
        </form>
    </div>
)
}