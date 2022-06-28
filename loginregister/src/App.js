import React, { useState,useEffect } from 'react'
import Login from './components/login';
import Dashboard from './components/dashboard';
import Register from './components/register';
import {
  Routes,
  Route,
  useNavigate,
  
} from "react-router-dom";
import axios from 'axios';

 
function App() { 
  let navigate  = useNavigate()
  const [isAuthenticated,setIsAuthinticated] = useState(false);
  const cookies = document.cookie.split('; ').find(row => row.startsWith('name='))?.split('=')[1]
  
  async function isAuth(){
    try {
      if(cookies.length>1){
      const tokens = JSON.parse(cookies);
      const res   = await axios.get('http://localhost:9001/verify',{headers:{
        token:tokens
      }})
      const parseRes = await res.data
      console.log(parseRes)
      return parseRes
    }
    
      
      
    } catch (error) {
      console.log(error)
    }
  }
  const track = isAuth()

  useEffect(()=>{
 
    const p = Promise.resolve(track)
    p.then(data=>{
      console.log(data)
      if (data===true){
        setIsAuthinticated(true)
      }
      else{
        setIsAuthinticated(false)
      }
      console.log(isAuthenticated)

    })
    
    if(isAuthenticated){
      return navigate('/dashboard')

      
    }
    else{
      return navigate('/login')
    }

  },[isAuthenticated])



 


  return (
    <div>

    <Routes>
    
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={ <Register setIsAuthinticated={setIsAuthinticated}/>} />
    </Routes>
   
    </div>
  );
}

export default App;
