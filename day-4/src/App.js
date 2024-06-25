import './App.css';
import Home from './Home';
import NotFound from './NotFound';
import { Routes ,Route } from 'react-router-dom';
import UseState from './25-05/UseState';
import UseEffect1 from './26-05/UseEffect1';
import UseEffect2 from './26-05/UseEffect2';
import UseEffect3 from './29-05/UseEffect-3';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/useState' element={<UseState/>}/>
        <Route path='/useEffect1' element={<UseEffect1/>}/>
        <Route path='/useEffect2' element={<UseEffect2/>}/>
        <Route path='/useEffect3' element={<UseEffect3/>}/>

      </Routes>
    </div>
  );
}

export default App;
