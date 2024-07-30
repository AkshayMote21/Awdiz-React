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

import { Routing } from './30-05/Routing';
import { UserDetails } from './30-05/UserDetails';
import Mapping from './02-06/Mapping';
import AllProducts from './02-06/AllProducts';




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
        <Route path='/useNavigate' element={<Routing/>}/>
        <Route path='/user/:username' element={<UserDetails/>}/>
        <Route path='/mapping' element={<Mapping students={["chetan","minhaj","nilesh","akshay","furkan"]}/>}/>
        <Route path='/allProducts' element={<AllProducts/>}/>

        <Route path='/useCallbackComponent' element={<UseCallbackComponent/>}/>
        <Route path='/useMemoComponent' element={<UseMemoComponent/>}/>
        <Route path='/useRefComponent' element={<UseRefComponent/>}/>
        <Route path='/useRef2Component' element={<UseRef2Component/>}/>
      </Routes>
    </div>
  );
}

export default App;
