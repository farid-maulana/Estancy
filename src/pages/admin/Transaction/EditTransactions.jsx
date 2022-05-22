import React, { useState } from 'react'
import { Link, useLocation ,useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import Sidebar from '../../../components/admin/Sidebar'
import InputFieldWithLabel from '../../../components/auth/InputFieldWithLabel'
import Footer from '../../../components/admin/Footer'
import InputSelect from '../../../components/form/InputSelect'

const EditTransaction = () => {
  const apiURL = "http://localhost:3001/transactions/"
  const { state } = useLocation()
  const navigate = useNavigate()

  const [transaction, setTransaction] = useState(state)
  const inputChangeHandler = (event) => {
    const { name, value } = event.target
    setTransaction({ ...transaction, [name]: value })
    console.log(transaction)
  }

  const editDataHandler = () => {
    fetch(apiURL + transaction.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/transactions')
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
                <h6 className="mb-0">New Transaction</h6>
                <p className="text-sm mb-0">Create new transaction</p>
                <hr className="horizontal dark my-3" />
                <div className="row">
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'text'} nameId={'customerName'} label={'Customer Name'} value={transaction.customerName} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'text'} nameId={'customerPhoneNumber'} label={'Customer Phone Number'} value={transaction.customerPhoneNumber} onChangeHandler={inputChangeHandler} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'text'} nameId={'propertyName'} label={'Property Name'} value={transaction.propertyName} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'text'} nameId={'propertyAddress'} label={'Property Address'} value={transaction.propertyAddress} onChangeHandler={inputChangeHandler} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'date'} nameId={'checkIn'} label={'Check In'} value={transaction.checkIn} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'date'} nameId={'checkOut'} label={'Check Out'} value={transaction.checkOut} onChangeHandler={inputChangeHandler} />
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-3">
                  <Link to={'/transactions'} name="button" className="btn btn-light m-0">Cancel</Link>
                  <button type="submit" name="button" className="btn bg-gradient-primary m-0 ms-2" onClick={editDataHandler}>
                    Save Transaction
                  </button>
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

export default EditTransaction
