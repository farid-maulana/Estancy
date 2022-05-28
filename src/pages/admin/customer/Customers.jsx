import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import CustomerTableRow from '../../../components/admin/CustomerTableRow'
import Sidebar from '../../../components/admin/Sidebar'
import Footer from '../../../components/admin/Footer'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";


const Customers = () => {
  const navigate = useNavigate()
  const [customers, setCustomers] = useState(false)

  const getAllDataHandler = () => {
    const q = query(collection(db, 'customers'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setCustomers(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }

  const updateDataHandler = (data) => {
    setCustomers(data)
    navigate('/customers/edit', { state: data })
  }

  // const deleteDataHandler = (id) => {
  //   fetch(apiURL + id, { method: 'DELETE' })
  //     .then(() => {
  //       getAllDataHandler()
  //     })
  // }

  const deleteDataHandler = async (id) => {
    const customerDocRef = doc(db, 'customers', id)
    try{
      await deleteDoc(customerDocRef)
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    getAllDataHandler()
  }, [])


  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar activePage={'Customers'} />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <div className="d-lg-flex">
                    <div>
                      <h5 className="mb-0">All Customers</h5>
                      <p className="text-sm mb-0">
                        You have {Object.keys(customers).length} customers!
                      </p>
                    </div>
                    <div className="ms-auto my-auto mt-lg-0 mt-4">
                      <Link to={'/customers/create'} className="btn btn-icon btn-dark me-2">
                        <i className="fa fa-plus"></i>
                        <span className="btn-inner--text"> &nbsp; Add customer</span>
                      </Link>
                      <button type="button" className="btn btn-outline-dark me-2" data-bs-toggle="modal" data-bs-target="#import">
                        Import
                      </button>
                      <div className="modal fade" id="import" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog mt-lg-10">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="ModalLabel">Import CSV</h5>
                              <i className="fas fa-upload ms-3"></i>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <p>You can browse your computer for a file.</p>
                              <input type="text" placeholder="Browse file..." className="form-control mb-3" />
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="importCheck" checked="" />
                                <label className="custom-control-label" htmlFor="importCheck">I accept the terms and conditions</label>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn bg-gradient-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn bg-gradient-primary btn-sm">Upload</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-outline-dark export mt-sm-0 mt-1" data-type="csv" type="button" name="button">Export</button>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Customer</th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Phone Number</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Age</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Check In</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                          <th class="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          customers && customers.map((customer, index) => {
                            return <CustomerTableRow
                              data={customer}
                              key={index}
                              id={customer.data.id}
                              name={customer.data.name}
                              email={customer.data.email}
                              phone_number={customer.data.phone_number}
                              date_of_birth={customer.data.date_of_birth}
                              checkIn={customer.data.checkIn}
                              status={customer.data.status}
                              updateCustomer={updateDataHandler}
                              deleteCustomer={deleteDataHandler}
                              />
                          })
                        } 
                      </tbody>
                    </table>
                  </div>
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

export default Customers