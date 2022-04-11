import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faHandshakeAngle, faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import InputField from '../../../components/admin/InputField'

const EditTransaction = () => {
  const apiURL = "http://localhost:3001/transactions/"
  const { state } = useLocation()
  const navigate = useNavigate()

  const [transaction, setTransaction] = useState(state)

  useEffect(
    () => {
      setTransaction(state)
    },
    [state]
  )

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
        navigate('/listed-transactions')
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
            <li className='w-full py-3 px-3 rounded-tl-lg rounded-bl-lg text-slate-600 mb-3 hover:bg-slate-50'>
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
            <li className='bg-slate-50 w-full py-3 px-3 rounded-tl-lg rounded-bl-lg text-primary mb-4' >
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
            <div className='bg-white rounded-lg p-6'>
              <h3 className='text-lg font-medium mb-1'>Edit Transaction</h3>
              <p className='text-xs font-thin text-slate-400 mb-8'>Fill this form to edit your transaction</p>
              <div className='grid gap-x-8 grid-cols-2 mb-6'>
                <div className='w-full mr-4'>
                  <label htmlFor='customerId' className='text-sm'>Customer Id</label>
                  <select name="customerId" id="customerId" className='form-select' value={transaction.customerId} onChange={inputChangeHandler}>
                    <option value="" selected disabled>Choose...</option>
                    <option value="1212">1212</option>
                    <option value="1213">1213</option>
                    <option value="1314">1314</option>
                    <option value="1415">1415</option>
                  </select>
                </div>
                <InputField type={'text'} id={'transactionId'} name={'transactionId'} title={'Transaction Id'} value={transaction.transactionId} onChange={inputChangeHandler} />
              </div>
              <div className='grid gap-x-8 grid-cols-2 mb-6'>
              <InputField type={'date'} id={'startDate'} name={'startDate'} title={'Start Date'} value={transaction.startDate} onChange={inputChangeHandler} />
                <InputField type={'date'} id={'endDate'} name={'endDate'} title={'End Date'} value={transaction.endDate} onChange={inputChangeHandler} />
              </div>
              <div className='flex justify-left mb-6'>
                <Link to={'/listed-transactions'}>
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

export default EditTransaction
