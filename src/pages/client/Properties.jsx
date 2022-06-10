import React, { useEffect, useState } from 'react'
import Navbar from '../../components/clients/Navbar'
import Footer from '../../components/clients/Footer'
import InputWithLabelIcon from '../../components/form/InputWithLabelIcon'
import Property from '../../components/clients/Property'
import InputField from '../../components/form/InputField'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { Link } from 'react-router-dom'
import RadioButton from '../../components/form/RadioButton'
import CheckBox from '../../components/form/CheckBox'

const Properties = () => {
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

  useEffect(() => {
    getAllDataHandler()
  }, [])

  return (
    <>
      <Navbar />
      <header className='mb-5'>
        <div className="page-header min-vh-50" style={{ backgroundImage: "url(/img/banner.jpeg)", backgroundPosition: "0% 17.5%" }}>
          <span className="mask" style={{ background: "linear-gradient(102.65deg, #DFEDFF 24.8%, rgba(255, 255, 255, 0) 90.84%)", opacity: "100%" }}></span>
          <div className="container">
            <div className="row">
              <div className="mx-auto">
                <h1 className="w-50 mt-4">List of Properties</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative overflow-hidden" style={{ height: "36px", marginTop: "-35px" }}>
          <div className="w-full absolute bottom-0 start-0 end-0" style={{ transform: "scale(2)", transformOrigin: "top center", color: "#fff" }}>
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        <div className="container">
          <div className="row bg-white shadow-lg mt-n6 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
            <div className="col mt-lg-n2 mt-2">
              <InputWithLabelIcon label={'Location'} icon={'fas fa-map-marker-alt'} type={'text'} nameId={'location'} placeholder={'Where are you going?'} />
            </div>
            <div className="col mt-lg-n2 mt-2">
              <InputWithLabelIcon label={'Check In'} icon={'fas fa-calendar'} type={'text'} nameId={'checkIn'} placeholder={'Please select date'} />
            </div>
            <div className="col mt-lg-n2 mt-2">
              <InputWithLabelIcon label={'Check Out'} icon={'fas fa-calendar'} type={'text'} nameId={'checkOut'} placeholder={'Please select date'} />
            </div>
            <div className="col mt-lg-n2 mt-2">
              <InputWithLabelIcon label={'Guest'} icon={'fas fa-users'} type={'number'} nameId={'guest'} placeholder={'Add guests'} />
            </div>
            <div className="col d-flex align-items-center my-auto">
              <button type="button" className="btn bg-gradient-dark w-100 btn-lg mb-0 m4 mt-3">Search</button>
            </div>
          </div>
        </div>
      </header>
      <section className="mb-7">
        <div className="container">
          <div className='row'>
            <div className='col-lg-2'>
              <div className="pt-1 pb-5 position-sticky">
                <h5>Sort By</h5>
                <div className="my-3 mx-2">
                  <RadioButton nameId={'sorting'} text={'Recommendation'} />
                  <RadioButton nameId={'sorting'} text={'Lowest Price'} />
                  <RadioButton nameId={'sorting'} text={'Highest Price'} />
                  <RadioButton nameId={'sorting'} text={'Review Score'} />
                </div>
                <h5 className="mt-5">Filter</h5>
                <div className="my-3 mx-2">
                  <h6>Price</h6>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <label htmlFor="min">Min: </label>
                    </div>
                    <div className="col-lg-9">
                      <InputField type={'number'} nameId={'min'} placeholder={'Min price'} size={'sm'}/>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <label htmlFor="max">Max: </label>
                    </div>
                    <div className="col-lg-9">
                      <InputField type={'number'} nameId={'max'} placeholder={'Max price'} size={'sm'} />
                    </div>
                  </div>
                </div>
                <div className="my-3 mx-2">
                  <h6>Facility</h6>
                  <div className='row my-3'>
                    <div className='col-12'>
                      <CheckBox nameId={'private_pool'} text={'Private Pool'} />
                      <CheckBox nameId={'smoking_area'} text={'Smoking Area'} />
                      <CheckBox nameId={'wifi'} text={'Wifi'} />
                      <CheckBox nameId={'television'} text={'Television'} />
                      <CheckBox nameId={'pet'} text={'Pet Approved'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-10'>
              <div className="row">
                {
                  properties && properties.map((property, index) => {
                    return <Property
                      data={property}
                      key={index}
                      photo={property.data.photo}
                      name={property.data.name}
                      address={property.data.location}
                      bed={property.data.bedroom}
                      bath={property.data.bathroom}
                      private_pool={property.data.private_pool}
                      price={new Intl.NumberFormat("id-ID").format(property.data.price)} />
                  })
                }
              </div>
              <div className="row justify-space-between py-2">
                <div className="col-lg-4 ms-auto">
                  <ul className="pagination pagination-primary m-4">
                    <li className="page-item">
                      <Link className="page-link" to={'#'} aria-label="Previous">
                        <span aria-hidden="true"><i className="fa fa-angle-double-left" aria-hidden="true"></i></span>
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to={'#'}>1</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={'#'}>2</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={'#'}>3</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={'#'}>4</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={'#'}>5</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={'#'} aria-label="Next">
                        <span aria-hidden="true"><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Properties