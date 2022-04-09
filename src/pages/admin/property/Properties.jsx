import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faHandshakeAngle, faHome, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import PropertyTableRow from '../../../components/admin/PropertyTableRow'


const Properties = () => {
  const apiURL = "http://localhost:3001/properties/"
  const navigate = useNavigate()
  const [properties, setProperties] = useState(false)

  const getAllDataHandler = () => {
    fetch(apiURL)
      .then(response => response.json())
      .then(property => setProperties(property))
  }

  const updateDataHandler = (data) => {
    setProperties(data)
    navigate('/edit-property', {state: data})
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
            <h1 className='font-medium text-xl mb-4'>Listed Properties</h1>
            <Link to={'/create-property'}>
              <button className='rounded-lg shadow-md bg-gradient-to-r from-primary to-[#846BE4] text-white text-xs font-medium tracking-wide capitalize py-2.5 px-5 mb-6 items-end hover:shadow-lg hover:scale-101 active:opacity-90 transition'>
                <FontAwesomeIcon icon={faPlus} /> Add Property
              </button>
            </Link>
            <div className="not-prose relative bg-white rounded-xl overflow-hidden">
              <div className="relative rounded-xl overflow-auto">
                <div className="shadow-sm overflow-hidden my-6">
                  <table className="border-collapse table-fixed w-full text-sm">
                    <thead>
                      <tr>
                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Name</th>
                        <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">Location</th>
                        <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Price</th>
                        <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {
                        properties && properties.map((property, index) => {
                          return <PropertyTableRow
                            data={property}
                            key={index}
                            id={property.id}
                            name={property.name}
                            location={property.location}
                            price={property.price}
                            deleteProperty={deleteDataHandler}
                            updateProperty={updateDataHandler} />
                        })
                      }
                    </tbody>
                  </table>
                </div>
                <p className='text-xs text-slate-400 mb-6 ml-4'>Showing {Object.keys(properties).length} results</p>
              </div>
            </div>
          </div>
        </section>
        {/* End Content Section */}
      </div>
    </div>
  )
}

export default Properties