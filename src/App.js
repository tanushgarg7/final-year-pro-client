import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Register from "./pages/Auth/Register";
import Login from './pages/Auth/Login';

import ForgotPassword from './pages/Auth/ForgotPassword';

import Search from './pages/Search';

function App() {
  return (
    <>
     <Routes>
         <Route path = '/' element = {<HomePage/>}/> 
         
         <Route path = '/search' element = {<Search/>}/>
         
        
        
                <Route path = '/about' element = {<About/>}/>
                <Route path = '/contact' element = {<Contact/>}/>
                <Route path = '/policy' element = {<Policy/>}/>
                <Route path = '*' element = {<Pagenotfound/>}/>
                <Route path = '/register' element = {<Register/>}/>
                <Route path = '/login' element = {<Login/>}/>
                <Route path="/forgot-password" element={<ForgotPassword />} />
     </Routes>
      
    
      
    </>
  );
}

export default App;
