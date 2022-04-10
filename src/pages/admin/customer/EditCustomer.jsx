import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faHandshakeAngle, faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import InputField from '../../../components/admin/InputField'

const EditCustomer = () => {
  const apiURL = "http://localhost:3001/customers/"
  const { state } = useLocation()
  const navigate = useNavigate()

  const [customer, setCustomer] = useState(state)

  useEffect(
    () => {
      setCustomer(state)
    },
    [state]
  )

  const inputChangeHandler = (event) => {
    const { name, value } = event.target
    setCustomer({ ...customer, [name]: value })
    console.log(customer)
  }

  const editDataHandler = () => {
    fetch(apiURL + customer.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/listed-customers')
      })
  }

  return (
    <div className='container-xl flex bg-[#f8f8f8] overflow-hidden min-h-screen'>
      {/* Navbar Section */}
      <Navbar />
      {/* End Navbar Section */}

      <div className='min-h-screen w-full flex flex-row'>
        {/* Sidebar Section */}
        <aside className='z-10 mt-16 w-72 bg-white border-t shadow-md hidden lg:block'>
          <ul className='mt-6 ml-3 list-none mb-16'>
            <li className='w-full py-3 px-3 rounded-tl-lg rounded-bl-lg hover:bg-slate-50 mb-3'>
              <Link to={'/listed-properties'}>
                <FontAwesomeIcon icon={faHome} />
                <span className='ml-2 font-medium text-sm'>Properties</span>
              </Link>
            </li>
            <li className='bg-slate-50 w-full py-3 px-3 rounded-tl-lg rounded-bl-lg text-primary mb-4'>
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
              <a href="::javascript">
                <FontAwesomeIcon icon={faCreditCard} />
                <span className='ml-2 font-medium text-sm'>Transactions</span>
              </a>
            </li>
          </ul>
        </aside>
        {/* End Sidebar Section */}

        {/* Content Section */}
        <section className='mt-16 mb-16 w-full'>
          <div className='p-6'>
            <div className='bg-white rounded-lg p-6'>
              <h3 className='text-lg font-medium mb-1'>Edit Customer</h3>
              <p className='text-xs font-thin text-slate-400 mb-8'>Fill this form to edit your customery</p>
              <InputField type={'text'} id={'name'} name={'name'} title={'Name'} value={customer.name} onChange={inputChangeHandler} />
              <InputField type={'text'} id={'email'} name={'email'} title={'Email'} value={customer.email} onChange={inputChangeHandler} />
              <InputField type={'number'} id={'phone_number'} name={'phone_number'} title={'Phone Number'} value={customer.phone_number} onChange={inputChangeHandler} />
              <div className='flex justify-left mb-6'>
                <Link to={'/listed-customer'}>
                  <button className='rounded-lg shadow-md border border-primary text-gradient-to-r from-primary to-[#846BE4] text-xs font-medium tracking-wide capitalize py-2.5 px-5 mb-6 mr-4 items-end hover:shadow-lg hover:scale-101 active:opacity-90 transition'>
                    Cancel
                  </button>
                </Link>
                <button type='submit' className='btn-primary' onClick={editDataHandler}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* End Content Section */}
      </div>
    </div>
  )
}

export default EditCustomer
