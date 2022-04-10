import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faHandshakeAngle, faHome, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import CustomerTableRow from '../../../components/admin/CustomerTableRow'


const Customers = () => {
  const apiURL = "http://localhost:3001/customers/"
  const navigate = useNavigate()
  const [customers, setCustomer] = useState(false)

  const getAllDataHandler = () => {
    fetch(apiURL)
      .then(response => response.json())
      .then(customer => setCustomer(customer))
  }

  const updateDataHandler = (data) => {
    setCustomer(data)
    navigate('/edit-customer', {state: data})
  }

  const deleteDataHandler = (id) => {
    fetch(apiURL + id, { method: 'DELETE' })
      .then(() => {
        getAllDataHandler()
      })
  }

  useEffect(() => {
    getAllDataHandler()
  }, [])


  return (
    <div className='container-xl flex bg-[#f8f8f8] overflow-hidden min-h-screen'>
      {/* Navbar Section */}
      <Navbar />
      {/* End Navbar Section */}

      <div className='min-h-screen w-full flex flex-row'>
        {/* Sidebar Section */}
        <aside className='z-10 mt-16 w-72 bg-white border-t shadow-md hidden lg:block'>
          <ul className='mt-6 ml-3 list-none mb-16'>
            <li className=' w-full py-3 px-3 rounded-tl-lg rounded-bl-lg hover:bg-slate-50 mb-4'>
              <Link to={'/listed-properties'}>
                <FontAwesomeIcon icon={faHome} />
                <span className='ml-2 font-medium text-sm'>Properties</span>
              </Link>
            </li>
            <li className='bg-slate-50 w-full py-3 px-3 rounded-tl-lg rounded-bl-lg text-primary mb-3'>
              <Link to={'/listed-customers'}>
                <FontAwesomeIcon icon={faUsers} />
                <span className='ml-2 font-medium text-sm'>Customers</span>
              </Link>
            </li>
            <li className='w-full py-3 px-3 rounded-tl-lg rounded-bl-lg text-slate-600 mb-3 hover:bg-slate-50'>
              <a href="::javascript">
                <FontAwesomeIcon icon={faHandshakeAngle} />
                <span className='ml-2 font-medium text-sm'>Negotiations</span>
              </a>
            </li>
            <li className='w-full py-3 px-3 rounded-tl-lg rounded-bl-lg text-slate-600 mb-3 hover:bg-slate-50'>
              <Link to={'/listed-transactions'}>
                <FontAwesomeIcon icon={faCreditCard} />
                <span className='ml-2 font-medium text-sm'>Transactions</span>
              </Link>
            </li>
          </ul>
        </aside>
        {/* End Sidebar Section */}

        {/* Content Section */}
        <section className='mt-16 mb-16 w-full'>
          <div className='p-6'>
            <h1 className='font-medium text-xl mb-4'>Listed Customer</h1>
            <Link to={'/create-customer'}>
              <button className='rounded-lg shadow-md bg-gradient-to-r from-primary to-[#846BE4] text-white text-xs font-medium tracking-wide capitalize py-2.5 px-5 mb-6 items-end hover:shadow-lg hover:scale-101 active:opacity-90 transition'>
                <FontAwesomeIcon icon={faPlus} /> Add Customer
              </button>
            </Link>
            <div className="not-prose relative bg-white rounded-xl overflow-hidden">
              <div className="relative rounded-xl overflow-auto">
                <div className="shadow-sm overflow-hidden my-6">
                  <table className="border-collapse table-fixed w-full text-sm">
                    <thead>
                      <tr>
                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Name</th>
                        <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">Email</th>
                        <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Phone Number</th>
                        <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {
                        customers && customers.map((customer, index) => {
                          return <CustomerTableRow
                            data={customer}
                            key={index}
                            id={customer.id}
                            name={customer.name}
                            email={customer.email}
                            phone_number={customer.phone_number}
                            deleteCustomer={deleteDataHandler}
                            updateCustomer={updateDataHandler} />
                        })
                      }
                    </tbody>
                  </table>
                </div>
                <p className='text-xs text-slate-400 mb-6 ml-4'>Showing {Object.keys(customers).length} results</p>
              </div>
            </div>
          </div>
        </section>
        {/* End Content Section */}
      </div>
    </div>
  )
}

export default Customers