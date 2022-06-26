import React from 'react'
import Login from './components/login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

 
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
