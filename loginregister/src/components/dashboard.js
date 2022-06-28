import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [userDetail,setUserDetails] = useState('')
    useEffect(()=>{
        console.log('hello')

    },[userDetail])
    const cookies = document.cookie.split('; ').find(row => row.startsWith('name='))?.split('=')[1]
    const navigate = useNavigate()
    const x = document.cookie.split('; ')
    .find(row => row.startsWith('name='))
    ?.split('=')[1];
    function eraseCookie(name) {   
        document.cookie = name+'=; Max-Age=-99999999;';  
    }
    const logoutUser= ()=>{
        eraseCookie('name')
        navigate('/login')
        

    }
    if(cookies.length>1){
        const tokens = JSON.parse(cookies)
        const userDetails  =  axios.get('http://localhost:9001/dashboard',{headers:{
            token: tokens
    }})
    const p = Promise.resolve(userDetails).then((data)=>{
        setUserDetails(data.data)
    })

    }


    return (
        <div>
            <h1>Hello {userDetail}</h1>
            <button onClick={logoutUser}>Log Out</button>
        </div>
    );
};

export default Dashboard;