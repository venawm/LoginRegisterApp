import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './scss/login.scss'
const Login = () => {
    const [loginDetails,setLoginDetails] = useState({"email":"","password":""})
    const navigate = useNavigate()
    const emailHandler=(e)=>{
       setLoginDetails({...loginDetails,email:e.target.value})
    }
    const passwordHandler=(e)=>{
        setLoginDetails({...loginDetails,password:e.target.value})
     }
   
    const registerUser=(e)=>{
        console.log('hello')
       navigate('/register')  
    }
    const loginHandler =(e)=>{
        try {
            e.preventDefault()
            const body  = loginDetails
            axios.post('http://localhost:9001/auth/login',body).then((data)=>{
                document.cookie = `name=${JSON.stringify(data.data.token)}`
                window.location.reload()
            })
        } catch (error) {
            
            console.log(error)
        }
    }

    return (
        <div className='Main'>
            <form onSubmit={loginHandler} id='thisform' className='loginform'>
                <h1>Not <span>Facebook</span></h1>
                <div className="input">
                    <h4>Email</h4>
                    <input type="email" value={loginDetails.email} onChange={emailHandler} placeholder='YourEmail@email.com'/>
                    <h4>Password</h4>
                    <input onChange={passwordHandler} type="password" placeholder='Password'/>
                </div>
                <div className="buttons">
                    <button id='thisform'>Login</button>
                    <button onClick={registerUser} className="newuser">Create new user</button>
                </div>
        </form>
            
        </div>
    );
};

export default Login;