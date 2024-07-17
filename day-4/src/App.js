import './App.css';
import Home from './Home';
import NotFound from './NotFound';
import { Routes ,Route } from 'react-router-dom';
import UseState from './25-05/UseState';
import UseEffect1 from './26-05/UseEffect1';
import UseEffect2 from './26-05/UseEffect2';
import UseEffect3 from './29-05/UseEffect-3';


import UseCallbackComponent from './29-06/UseCallbackComponent';
import UseMemoComponent from './29-06/UseMemoComponent';
import UseRefComponent from './30-06/UseRefComponent';
import UseRef2Component from './30-06/UseRef2Component';



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
        

        <Route path='/useCallbackComponent' element={<UseCallbackComponent/>}/>
        <Route path='/useMemoComponent' element={<UseMemoComponent/>}/>
        <Route path='/useRefComponent' element={<UseRefComponent/>}/>
        <Route path='/useRef2Component' element={<UseRef2Component/>}/>
      </Routes>
    </div>
  );
}

export default App;
