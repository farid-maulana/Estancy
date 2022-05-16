import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../../components/admin/Footer'
import Navbar from '../../../components/admin/Navbar'
import Sidebar from '../../../components/admin/Sidebar'
import TransactionTableRow from '../../../components/admin/TransactionTableRow'

const Transactions = () => {
  const apiURL = "http://localhost:3001/transactions/"
  const navigate = useNavigate()
  const [transactions, setTransactions] = useState(false)

  const getAllDataHandler = () => {
    fetch(apiURL)
      .then(response => response.json())
      .then(transaction => setTransactions(transaction))
  }

  const updateDataHandler = (data) => {
    setTransactions(data)
    navigate('/transactions/edit', { state: data })
  }

  useEffect(() => {
    getAllDataHandler()
  }, [])

  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar activePage={'Transactions'} />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <div className="d-lg-flex">
                    <div>
                      <h5 className="mb-0">All Transactions</h5>
                      <p className="text-sm mb-0">
                        You have {Object.keys(transactions).length} transactions!
                      </p>
                    </div>
                    <div className="ms-auto my-auto mt-lg-0 mt-4">
                      <Link to={'/transactions/create'} className="btn btn-icon btn-dark me-2">
                        <i className="fa fa-plus"></i>
                        <span className="btn-inner--text"> &nbsp; Add transaction</span>
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
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Property</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Check In</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Check Out</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                          <th class="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions && transactions.map((transaction, index) => {
                            return <TransactionTableRow 
                              data={transaction}
                              key={index}
                              customerName={transaction.customerName}
                              customerPhoneNumber={transaction.customerPhoneNumber}
                              transactionId={transaction.transactionId}
                              propertyName={transaction.propertyName}
                              propertyAddress={transaction.propertyAddress}
                              checkIn={transaction.checkIn}
                              checkOut={transaction.checkOut}
                              status={transaction.status}
                              updateTransaction={updateDataHandler}

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

export default Transactions