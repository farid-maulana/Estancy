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
import Properties from './pages/admin/property/Properties';
import PropertyDetail from './pages/admin/property/PropertyDetail';
import CreateProperty from './pages/admin/property/CreateProperty';
import EditProperty from './pages/admin/property/EditProperty';


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
        <Route path='/properties' element={<Properties />} />
        <Route path='/properties/detail' element={<PropertyDetail />} />
        <Route path='/properties/create' element={<CreateProperty />} />
        <Route path='/properties/edit' element={<EditProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
