import React, { useState }from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialState={
    username: '',
    password: ''
}

export default function Login(){

  const [user, setUser]= useState(initialState)

  const  login = e => {
        e.preventDefault()

       axiosWithAuth()
       .post('/login') 
       .then((res)=>{
           console.log(res)
       })
       .catch((err)=>{
           console.log({err})
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