import React,{useState} from 'react';
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
    console.log(loginDetails)
    const registerUser=(e)=>{
        console.log('hello')
       navigate('/register')
    }
    return (
        <div className='Main'>
            <div className="loginform">
                <h1>Not <span>Facebook</span></h1>
                <div className="input">
                    <h4>Email</h4>
                    <input type="text" value={loginDetails.email} onChange={emailHandler} placeholder='YourEmail@email.com'/>
                    <h4>Password</h4>
                    <input onChange={passwordHandler} type="text" placeholder='Password'/>
                </div>
                <div className="buttons">
                    <button>Login</button>
                    <button onClick={registerUser} className="newuser">Create new user</button>
                </div>
        </div>
            
        </div>
    );
};

export default Login;