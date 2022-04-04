import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/client/Home'
import AboutUs from './pages/client/AboutUs'
import ResetPassword1 from './pages/auth/ResetPassword1';
import ResetPassword2 from './pages/auth/ResetPassword2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/verification' element={<ResetPassword1/>}/>
        <Route path='/reset-password' element={<ResetPassword2/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
