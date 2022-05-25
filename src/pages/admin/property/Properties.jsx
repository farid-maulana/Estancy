import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import Sidebar from '../../../components/admin/Sidebar'
import Footer from '../../../components/admin/Footer'
import CardProperty from '../../../components/admin/CardProperty'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../../firebase/config'


const Properties = () => {
  const navigate = useNavigate()
  const [properties, setProperties] = useState(false)

  const getAllDataHandler = () => {
    const q = query(collection(db, 'properties'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setProperties(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }

  const detailDataHandler = (data) => {
    setProperties(data)
    navigate('/properties/detail', { state: data })
  }

  useEffect(() => {
    getAllDataHandler()
  }, [])


  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar activePage={'Properties'} />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0 p-3 d-flex justify-content-between">
                  <div>
                    <h6 className="mb-1">Listed Properties</h6>
                    <p className="text-sm">You have {Object.keys(properties).length} properties!</p>
                  </div>
                  <div className='d-inline'>
                    <div className="dropdown d-inline">
                      <Link to={'#'} className="btn btn-outline-dark dropdown-toggle " data-bs-toggle="dropdown" id="navbarDropdownMenuLink2">
                        Filters
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg-start px-2 py-3" aria-labelledby="navbarDropdownMenuLink2" data-popper-placement="left-start">
                        <li><Link className="dropdown-item border-radius-md" to={'#'}>Status: Available</Link></li>
                        <li><Link className="dropdown-item border-radius-md" to={'#'}>Status: Unavailable</Link></li>
                        <li><Link className="dropdown-item border-radius-md" to={'#'}>Status: Archived</Link></li>
                        <li>
                          <hr className="horizontal dark my-2" />
                        </li>
                        <li><Link className="dropdown-item border-radius-md text-danger" to={'#'}>Remove Filter</Link></li>
                      </ul>
                    </div>
                    <Link to={'/properties/create'} className="btn btn-icon btn-dark ms-2">
                      <i className="fa fa-plus"></i>
                      <span className="btn-inner--text"> &nbsp; Add property</span>
                    </Link>
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="row">
                    {
                      properties && properties.map((property, index) => {
                        return <CardProperty
                          data={property}
                          key={index}
                          id={property.data.id}
                          photo={property.data.photo}
                          status={property.data.status}
                          name={property.data.name}
                          address={property.data.location}
                          detailProperty={detailDataHandler} />
                      })
                    }
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

export default Properties