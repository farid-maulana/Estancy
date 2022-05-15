import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/client/Home'
import AboutUs from './pages/client/AboutUs'
import ForgotPassword from './pages/auth/ForgotPassword';
import VerificationCode from './pages/auth/VerificationCode';
import ResetPassword from './pages/auth/ResetPassword';
import ContactUs from './pages/client/ContactUs';
import Dashboard from './pages/admin/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/verification-code' element={<VerificationCode />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
