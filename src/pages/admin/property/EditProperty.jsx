import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faHandshakeAngle, faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import InputField from '../../../components/admin/InputField'

const EditProperty = () => {
  const apiURL = "http://localhost:3001/properties/"
  const { state } = useLocation()
  const navigate = useNavigate()

  const [property, setProperty] = useState(state)

  useEffect(
    () => {
      setProperty(state)
    },
    [state]
  )

  const inputChangeHandler = (event) => {
    const { name, value } = event.target
    setProperty({ ...property, [name]: value })
    console.log(property)
  }

  const editDataHandler = () => {
    fetch(apiURL + property.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(property),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/listed-properties')
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
            <li className='bg-slate-50 w-full py-3 px-3 rounded-tl-lg rounded-bl-lg text-primary mb-4'>
              <Link to={'/listed-properties'}>
                <FontAwesomeIcon icon={faHome} />
                <span className='ml-2 font-medium text-sm'>Properties</span>
              </Link>
            </li>
            <li className='w-full py-3 px-3 rounded-tl-lg rounded-bl-lg text-slate-600 mb-3 hover:bg-slate-50'>
              <a href="::javascript">
                <FontAwesomeIcon icon={faUsers} />
                <span className='ml-2 font-medium text-sm'>Customers</span>
              </a>
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
              <h3 className='text-lg font-medium mb-1'>Edit Property</h3>
              <p className='text-xs font-thin text-slate-400 mb-8'>Fill this form to edit your property</p>
              <InputField type={'text'} id={'name'} name={'name'} title={'Property name'} value={property.name} onChange={inputChangeHandler} />
              <InputField type={'text'} id={'location'} name={'location'} title={'Location'} value={property.location} onChange={inputChangeHandler} />
              <div className='w-full mb-6'>
                <label htmlFor='description' className='text-sm'>Description</label>
                <textarea id='description' name='description' className='form-control resize-none h-20' onChange={inputChangeHandler}>{property.description}</textarea>
              </div>
              <div className='grid gap-x-8 grid-cols-2'>
                <InputField type={'number'} id={'surface_area'} name={'surface_area'} title={'Surface area (m²)'} value={property.surface_area} onChange={inputChangeHandler} />
                <InputField type={'number'} id={'building_area'} name={'building_area'} title={'Building area (m²)'} value={property.building_area} onChange={inputChangeHandler} />
              </div>
              <InputField type={'number'} id={'price'} name={'price'} title={'Price'} value={property.price} onChange={inputChangeHandler} />
              <div className='grid gap-x-8 grid-cols-2 mb-6'>
                <div className='w-full mr-4'>
                  <label htmlFor='condition' className='text-sm'>Condition</label>
                  <select name="condition" id="condition" className='form-select' value={property.condition} onChange={inputChangeHandler}>
                    <option selected disabled>Choose...</option>
                    <option value="very good">Very Good</option>
                    <option value="good">Good</option>
                    <option value="not bad">Not Bad</option>
                    <option value="broken">Broken</option>
                  </select>
                </div>
                <InputField type={'number'} id={'building_age'} name={'building_age'} title={'Building age (year)'} value={property.building_age} onChange={inputChangeHandler} />
              </div>
              <div className='grid gap-x-8 grid-cols-3 mb-6'>
                <InputField type={'number'} id={'bedroom'} name={'bedroom'} title={'Bedroom count'} value={property.bedroom} onChange={inputChangeHandler} />
                <InputField type={'number'} id={'bathroom'} name={'bathroom'} title={'Bathroom count'} value={property.bathroom} onChange={inputChangeHandler} />
                <div className='w-full'>
                  <label htmlFor='private_pool' className='text-sm'>Private pool</label>
                  <select name="private_pool" id="private_pool" className='form-select' value={property.private_pool} onChange={inputChangeHandler}>
                    <option selected disabled>Choose...</option>
                    <option value="available">Available</option>
                    <option value="not available">Not Available</option>
                  </select>
                </div>
              </div>
              <div className='flex justify-left mb-6'>
                <Link to={'/listed-properties'}>
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

export default EditProperty
