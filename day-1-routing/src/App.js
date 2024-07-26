import {BrowserRouter, Route } from 'react-router-dom';

import { Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Mens from './Components/Mens';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/register' element={<Register/>}/> 
        <Route path='/mens' element={<Mens/>}/> 
        <Route path='/profile' element={<Profile/>}/> 
        <Route path='/login' element={<Login/>}/> 
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
