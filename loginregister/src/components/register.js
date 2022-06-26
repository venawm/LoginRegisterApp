import React,{useState} from 'react';
import axios from 'axios'
import './scss/register.scss'

const Register = () => {
    const [loginDetails,setLoginDetails] = useState({"name":"","email":"","password":""})

    const inputHandler=(e)=>{
       setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
       console.log(loginDetails)
    }
    const registerUser = async(e)=>{
        try {
            e.preventDefault()
            const body = loginDetails
           axios.post('http://localhost:9001/auth/register',body)
            console.log(body)
    
            
        } catch (error) {
            console.log(error)
            
        }
       
    }
    
    return (
        <div className='register'>
            <div className="registerform">
                <h1>Not <span>Facebook</span></h1>
                <form onSubmit={registerUser} id='myform'>
                    <h4>Name</h4>
                    <input onChange={inputHandler} name='name' type="text" placeholder='name'/>
                    <h4>Email</h4>
                    <input  onChange={inputHandler} name='email' type="email" placeholder='YourEmail@email.com'/>
                    <h4>Password</h4>
                    <input  onChange={inputHandler} name='password' type="password" placeholder='Password'/>
                </form>
                <div className="buttons">
                    <button form="myform">Create</button>
                   
                </div>
        </div>
            
        </div>
    );
};

export default Register;