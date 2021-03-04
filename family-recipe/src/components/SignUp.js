import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initialSignUpValues = {
    username: '',
    password: '',
}


function SignUp() {
const [newUser, setNewUser] = useState(initialSignUpValues)

const history = useHistory()

const setUser = e =>{
    e.preventDefault()

    axiosWithAuth()
    .post('/auth/register', newUser)
    .then((res)=>{
        console.log('register user:', res)
        history.push('/login')
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
        <div className='container'>
            <div className='imageContainer'>

            </div>
            <div className='signupFormContainer'>
                <h1>Welcome to Super Sweet Recipe Page!</h1>
                <p>Lets creat a login to get started!</p>
                <form onSubmit={setUser} className='signupForm'>
                    <label>Username: 
                        <input
                        className='signupInput'
                        type= 'text'
                        name= 'username'
                        value= {newUser.username}
                        placeholder= 'Username'
                        onChange={handleChange}
                        />
                    </label>
                    <label>Password: 
                        <input
                        className='signupInput'
                        type= 'password'
                        name= 'password'
                        value= {newUser.password}
                        placeholder= 'Password'
                        onChange={handleChange}
                        />
                    </label>
                    <button type='submit' className='submitBtn'>Sign Up</button>
                </form>
                
            </div>
        </div>
    )
}

export default SignUp
