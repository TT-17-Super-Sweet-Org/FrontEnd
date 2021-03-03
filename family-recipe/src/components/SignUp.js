import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialSignUpValues = {
    // firstName: '',
    // lastName: '',
    // email: '',
    username: '',
    password: '',
}


function SignUp() {
const [newUser, setNewUser] = useState(initialSignUpValues)

const setUser = e =>{
    e.preventDefault()

    axiosWithAuth()
    .post('/auth/register', newUser)
    .then((res)=>{
        console.log('register user:', res)
    })
    .catch((err)=>{
        console.log('register user error:', err)
    })
}

const handleChange = e => {
   setNewUser({
       ...newUser,
       [e.target.name]: e.target.value
   })

}

    return (
        <div>
            <form onSubmit={setUser}>
                {/* <label>
                    <input
                    type= 'text'
                    name= 'firstName'
                    value= {newUser.firstName}
                    placeholder= 'First Name'
                    onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                    type= 'text'
                    name= 'lastName'
                    value= {newUser.lastName}
                    placeholder= 'Last Name'
                    onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                    type= 'email'
                    name= 'email'
                    value= {newUser.email}
                    placeholder= 'Email'
                    onChange={handleChange}
                    />
                </label> */}
                <label>
                    <input
                    type= 'text'
                    name= 'username'
                    value= {newUser.username}
                    placeholder= 'Username'
                    onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                    type= 'password'
                    name= 'password'
                    value= {newUser.password}
                    placeholder= 'Password'
                    onChange={handleChange}
                    />
                </label>
            </form>
            <button>Sign Up</button>
        </div>
    )
}

export default SignUp
