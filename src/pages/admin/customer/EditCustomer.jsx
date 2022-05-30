import React, { useState } from 'react'
import { Link, useLocation ,useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import Sidebar from '../../../components/admin/Sidebar'
import InputFieldWithLabel from '../../../components/auth/InputFieldWithLabel'
import Footer from '../../../components/admin/Footer'
import InputSelect from '../../../components/form/InputSelect'
import { doc, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'

const EditCustomer = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [name, setName] = useState(state.data.name)
  const [email, setEmail] = useState(state.data.email)
  const [phone_number, setPhoneNumber] = useState(state.data.phone_number)
  const [date_of_birth, setDateOfBirth] = useState(state.data.date_of_birth)
  const [checkIn, setCheckIn] = useState(state.data.checkIn)
  const [status, setStatus] = useState(state.data.status)

  // const inputChangeHandler = (event) => {
  //   const { name, value } = event.target
  //   setCustomer({ ...customer, [name]: value })
  //   console.log(customer)
  // }

  const editDataHandler = async (e) => {
    e.preventDefault()
    const customerDocRef = doc(db, 'customers', state.id)
    try {
      await updateDoc(customerDocRef, {
        name: name,
        email: email,
        phone_number: phone_number,
        date_of_birth: date_of_birth,
        checkIn: checkIn,
        status: status,
        created:Timestamp.now(),
        updated:Timestamp.now(),
      }).then(() => navigate('/customers'))
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
                <h6 className="mb-0">New Customer</h6>
                <p className="text-sm mb-0">Create new customer</p>
                <hr className="horizontal dark my-3" />
                <div className="row">
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'text'} nameId={'name'} label={'Customer Name'} value={name} onChangeHandler={(e) => setName(e.target.value)}/>
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'email'} nameId={'email'} label={'Customer Email'} value={email} nChangeHandler={(e) => setEmail(e.target.value)}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'text'} nameId={'phone_number'} label={'Customer Phone Number'} value={phone_number} onChangeHandler={(e) => setPhoneNumber(e.target.value)}/>
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'date'} nameId={'date_of_birth'} label={'Customer Date of Birth'} value={date_of_birth} nChangeHandler={(e) => setDateOfBirth(e.target.value)}/>
                  </div>
                  <div className="col-md-6">
                    <InputFieldWithLabel type={'date'} nameId={'checkIn'} label={'Check In'} onChangeHandler={(e) => setCheckIn(e.target.value)}/>
                  </div>
                  <div className="col-md-6">
                    <InputSelect nameId={'status'} label={'Status'} options={['booking','active','posponed']} onChangeHandler={(e) => setStatus(e.target.value)} />
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-3">
                  <Link to={'/customers'} name="button" className="btn btn-light m-0">Cancel</Link>
                  <button type="submit" name="button" className="btn bg-gradient-primary m-0 ms-2" onClick={editDataHandler}>Save Customer</button>
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
export default EditCustomer
