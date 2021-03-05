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
           console.log('this is login:', res.data)
           localStorage.setItem('token', res.data.token)
           localStorage.setItem('user', res.data.user)
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
    <div className='loginDiv'>
        <form onSubmit={login}>
            <label>Username
            <input
            className='loginInput'
            type= 'text' 
            name= 'username'
            value= {user.username}
            onChange={handleChange}
            placeholder='username'
            />
            </label>Password
            <label>
            <input
             className='loginInput'
             type= 'password' 
             name= 'password'
             value= {user.password}
             onChange={handleChange}
             placeholder='password'
            />
            </label>
            <button id='loginButton'>Log In</button>
        </form>
    </div>
)
}