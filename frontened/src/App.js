import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Nav from './Component/Nav';
import Create from './Component/Createacc';
import Deposit from './Component/Deposit';
import Withdraw from './Component/Withdraw';
import Pin from './Component/Pinchange';
import Fund from './Component/Fundtransfer';
import Accountsum from './Component/Accountsum';
import Balance from './Component/Balance';
import Login from './Component/Login';
import Register from './Component/Register';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Nav/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/deposit' element={<Deposit/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
        <Route path='/pin' element={<Pin/>}/>
        <Route path='/fund' element={<Fund/>}/>
        <Route path='/accountsum' element={<Accountsum/>}/>
        <Route path='/balance' element={<Balance/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
