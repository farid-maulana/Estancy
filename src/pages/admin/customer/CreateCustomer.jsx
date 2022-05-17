import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import Sidebar from '../../../components/admin/Sidebar'
import InputFieldWithLabel from '../../../components/auth/InputFieldWithLabel'
import Footer from '../../../components/admin/Footer'
import InputSelect from '../../../components/form/InputSelect'

const CreateCustomer = () => {
  const apiURL = "http://localhost:3001/customers/"
  const navigate = useNavigate()
  const [customer, setCustomers] = useState({})

  const inputChangeHandler = (event) => {
    const { name, value } = event.target
    setCustomers({ ...customer, [name]: value })
  }

  const createDataHandler = () => {
    fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/customers')
      })
  }

  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar activePage={'New Customer'} />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-lg-12 col-12 mx-auto">
              <div className="card card-body mb-4">
                <h6 className="mb-0">New Customer</h6>
                <p className="text-sm mb-0">Create new customer</p>
                <hr className="horizontal dark my-3" />
                <div className="row">
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'text'} nameId={'name'} label={'Customer Name'} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'email'} nameId={'email'} label={'Customer Email'} onChangeHandler={inputChangeHandler}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'text'} nameId={'phone_number'} label={'Customer Phone Number'} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'date'} nameId={'date_of_birth'} label={'Customer Date of Birth'} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'date'} nameId={'checkIn'} label={'Check In'} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-md-6">
                    <InputSelect nameId={'status'} label={'Status'} options={['booking','active','posponed']} onChangeHandler={inputChangeHandler} />
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-3">
                  <Link to={'/customers'} name="button" className="btn btn-light m-0">Cancel</Link>
                  <button type="submit" name="button" className="btn bg-gradient-primary m-0 ms-2"onClick={createDataHandler}>Create Customer</button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}

export default CreateCustomer
