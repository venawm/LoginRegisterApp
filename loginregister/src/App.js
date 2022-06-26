import React, { useState,useEffect } from 'react'
import Login from './components/login';
import Dashboard from './components/dashboard';
import Register from './components/register';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

 
function App() { 
  const [isAuthenticated,setIsAuthinticated] = useState(false);
  const navigate = useNavigate()
  useEffect(()=>{
    if(isAuthenticated){
      navigate('/dashboard')
    }
    else{
      navigate('/login')
    }
  

  },[])


  return (
    <Routes>
      <Route path="/login" element={!isAuthenticated&& <Login />} />
      <Route path="/dashboard" element={isAuthenticated&& <Dashboard />} />
      <Route path="/register" element={ <Register />} />
    </Routes>
  );
}

export default App;
