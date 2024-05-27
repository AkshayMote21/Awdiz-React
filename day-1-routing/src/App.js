import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Mens from './Components/Mens';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/mens' element={<Mens/>}/> 
        <Route path='/profile' element={<Profile/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/> 
      </Routes>
    </div>
  );
}

export default App;
