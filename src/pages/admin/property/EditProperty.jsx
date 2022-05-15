import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import Sidebar from '../../../components/admin/Sidebar'
import InputFieldWithLabel from '../../../components/auth/InputFieldWithLabel'
import InputSelect from '../../../components/form/InputSelect'
import Footer from '../../../components/admin/Footer'

const EditProperty = () => {
  const apiURL = "http://localhost:3001/properties/"
  const { state } = useLocation()
  const navigate = useNavigate()

  const [property, setProperty] = useState(state)

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
        navigate('/properties')
      })
  }

  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar activePage={'New Property'} />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-lg-12 col-12 mx-auto">
              <div className="card card-body mb-4">
                <h6 className="mb-0">Edit Property</h6>
                <p className="text-sm mb-0">Edit property</p>
                <hr className="horizontal dark my-3" />
                <InputFieldWithLabel type={'text'} nameId={'name'} label={'Property Name'} value={property.name} onChangeHandler={inputChangeHandler} />
                <InputFieldWithLabel type={'text'} nameId={'location'} label={'Property Location'} value={property.location} onChangeHandler={inputChangeHandler} />
                <div className="form-group">
                  <label htmlFor="propertyDescription" className="form-label">Property Description</label>
                  <textarea className="form-control" id="description" name="description" onChange={inputChangeHandler}>{property.description}</textarea>
                </div>
                <InputFieldWithLabel type={'number'} nameId={'price'} label={'Property Price'} value={property.price} onChangeHandler={inputChangeHandler} />
                <div className="row">
                  <div className="col-4">
                    <InputFieldWithLabel type={'number'} nameId={'bedroom'} label={'Bedroom Total'} value={property.bedroom} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-4">
                    <InputFieldWithLabel type={'number'} nameId={'bathroom'} label={'Bathroom Total'} value={property.bathroom} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-4">
                    <InputFieldWithLabel type={'number'} nameId={'building_area'} label={'Building Area (m²)'} value={property.building_area} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Private Pool'} nameId={'private_pool'} options={['available', 'unavailable']} value={property.private_pool} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Living Room'} nameId={'living_room'} options={['available', 'unavailable']} value={property.living_room} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Kitchen'} nameId={'kitchen'} options={['available', 'unavailable']} value={property.kitchen} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Smoking Area'} nameId={'smoking_area'} options={['available', 'unavailable']} value={property.smoking_area} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Parking Area'} nameId={'parking_area'} options={['available', 'unavailable']} value={property.parking_area} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Wifi'} nameId={'wifi'} options={['available', 'unavailable']} value={property.wifi} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Television'} nameId={'television'} options={['available', 'unavailable']} value={property.television} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Shower'} nameId={'shower'} options={['available', 'unavailable']} value={property.shower} onChangeHandler={inputChangeHandler} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Pet'} nameId={'pet'} options={['approved', 'disapproved']} value={property.pet} onChangeHandler={inputChangeHandler} />
                  </div>
                </div>
                <InputFieldWithLabel type={'text'} nameId={'photo'} label={'Property Photo'} value={property.photo} onChangeHandler={inputChangeHandler} />
                <div className="d-flex justify-content-end mb-3">
                  <Link to={'/properties'} name="button" className="btn btn-light m-0">Cancel</Link>
                  <button type="button" name="button" className="btn bg-gradient-primary m-0 ms-2" onClick={editDataHandler}>Save Property</button>
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

export default EditProperty
