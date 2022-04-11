import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/client/Home'
import AboutUs from './pages/client/AboutUs'
import ResetPassword1 from './pages/auth/ResetPassword1';
import ResetPassword2 from './pages/auth/ResetPassword2';
import ContactUs from './pages/client/ContactUs';
import Properties from './pages/admin/property/Properties';
import CreateProperty from './pages/admin/property/CreateProperty';
import EditProperty from './pages/admin/property/EditProperty';
import Transactions from './pages/admin/transaction/Transactions'
import CreateTransaction from './pages/admin/transaction/CreateTransaction'
import EditTransaction from './pages/admin/transaction/EditTransactions'
import Customers from './pages/admin/customer/Customers';
import CreateCustomer from './pages/admin/customer/CreateCustomer';
import EditCustomer from './pages/admin/customer/EditCustomer';


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
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/listed-properties' element={<Properties/>}></Route>
        <Route path='/create-property' element={<CreateProperty/>}></Route>
        <Route path='/edit-property' element={<EditProperty/>}></Route>
        <Route path='/listed-transactions' element={<Transactions/>}></Route>
        <Route path='/create-transactions' element={<CreateTransaction/>}></Route>
        <Route path='/edit-transactions' element={<EditTransaction/>}></Route>
        <Route path='/listed-customers' element={<Customers/>}></Route>
        <Route path='/create-customer' element={<CreateCustomer/>}></Route>
        <Route path='/edit-customer' element={<EditCustomer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
