import React, { useState } from 'react'
import { Link, useLocation ,useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import Sidebar from '../../../components/admin/Sidebar'
import InputFieldWithLabel from '../../../components/auth/InputFieldWithLabel'
import Footer from '../../../components/admin/Footer'
import { doc, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'

const EditTransaction = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [customerName, setCustomerName] = useState(state.data.customerName)
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState(state.data.customerPhoneNumber)
  const [propertyName, setPropertyName] = useState(state.data.propertyName)
  const [propertyAddress, setPropertyAddress] = useState(state.data.propertyAddress)
  const [checkIn, setCheckIn] = useState(state.data.checkIn)
  const [checkOut, setCheckOut] = useState(state.data.checkOut)

  const editDataHandler = async (e) => {
    e.preventDefault()
    const transactionDocRef = doc(db, 'transactions', state.id)
    try {
      await updateDoc(transactionDocRef, {
        customerName: customerName,
        customerPhoneNumber: customerPhoneNumber,
        propertyName: propertyName,
        propertyAddress: propertyAddress,
        checkIn: checkIn,
        checkOut: checkOut,
        status: 'BOOKING',
        updated: Timestamp.now()
      }).then(() => navigate('/transactions'))
    } catch (err) {
      alert(err)
    }
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
                    <InputFieldWithLabel type={'text'} nameId={'customerName'} label={'Customer Name'} value={customerName} onChangeHandler={(e) => setCustomerName(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'text'} nameId={'customerPhoneNumber'} label={'Customer Phone Number'} value={customerPhoneNumber} onChangeHandler={(e) => setCustomerPhoneNumber(e.target.value)}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'text'} nameId={'propertyName'} label={'Property Name'} value={propertyName} onChangeHandler={(e) => setPropertyName(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'text'} nameId={'propertyAddress'} label={'Property Address'} value={propertyAddress} onChangeHandler={(e) => setPropertyAddress(e.target.value)} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'date'} nameId={'checkIn'} label={'Check In'} value={checkIn} onChangeHandler={(e) => setCheckIn(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'date'} nameId={'checkOut'} label={'Check Out'} value={checkOut} onChangeHandler={(e) => setCheckOut(e.target.value)} />
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
