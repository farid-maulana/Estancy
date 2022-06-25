import { collection, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Contact from '../../../components/admin/Contact'
import Footer from '../../../components/admin/Footer'
import Navbar from '../../../components/admin/Navbar'
import RoomChat from '../../../components/admin/RoomChat'
import Sidebar from '../../../components/admin/Sidebar'
import { db } from '../../../firebase/config'

const Negotiation = () => {
  const [customers, setCustomers] = useState()

  const getAllDataCustomerHandler = () => {
    const q = query(collection(db, 'customers'))
    onSnapshot(q, (querySnapshot) => {
      setCustomers  (querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }

  const getMessagesByCustomer = (customer) => {
    
  }

  useEffect(() => {
    getAllDataCustomerHandler()
  })

  return (
    <>
      <Sidebar />
      <main className='main-content position-relative max-height-vh-100 h-100 border-radius-lg '>
        <Navbar activePage={'Negotiations'} />
        <div className='container-fluid py-4'>
          <div className='card mb-3'>
            <div className='row'>
              <div className='col-4 pe-0'>
                <div className='card blur shadow-blur max-height-vh-80 min-vh-80 overflow-auto overflow-x-hidden mb-5 mb-lg-0'>
                  <div className='card-header shadow p-3'>
                    <input type='email' className='form-control' placeholder='Search Customer' aria-label='Email' />
                  </div>
                  <div className='card-body p-2 overflow-auto overflow-x-hidden'>
                    {
                      customers && customers.map((customer, index) => {
                        return <Contact
                          key={index}
                          data={customer}
                          name={customer.data.name}
                          onClickHandler={() => getMessagesByCustomer(customer)}
                        />
                      })
                    }
                  </div>
                </div>
              </div>
              <div className='col-8 ps-0'>
                <RoomChat />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Negotiation