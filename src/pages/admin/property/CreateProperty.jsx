import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import Sidebar from '../../../components/admin/Sidebar'
import InputFieldWithLabel from '../../../components/auth/InputFieldWithLabel'
import Footer from '../../../components/admin/Footer'
import InputSelect from '../../../components/form/InputSelect'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../../../firebase/config'

const CreateProperty = () => {
  const apiURL = "http://localhost:3001/properties/"
  const navigate = useNavigate()
  const [property, setProperty] = useState({})

  const inputChangeHandler = (event) => {
    const { name, value } = event.target
    const status = "available"
    setProperty({ ...property, [name]: value, status })
  }

  const createDataHandler = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'properties'), {
        name: property.name,
        location: property.location,
        description: property.description,
        price: property.price,
        bedroom: property.bedroom,
        bathroom: property.bathroom,
        building_area: property.building_area,
        private_pool: property.private_pool,
        living_room: property.living_room,
        kitchen: property.kitchen,
        smoking_area: property.smoking_area,
        parking_area: property.parking_area,
        wifi: property.wifi,
        television: property.television,
        shower: property.shower,
        pet: property.pet,
        photo: property.photo,
        status: 'available',
        created:Timestamp.now(),
        updated:Timestamp.now(),
      }).then(() => {
        navigate('/properties')
      })
    } catch (err) {
      alert(err)
    }
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
                <h6 className="mb-0">New Property</h6>
                <p className="text-sm mb-0">Create new property</p>
                <hr className="horizontal dark my-3" />
                <InputFieldWithLabel type={'text'} nameId={'name'} label={'Property Name'} onChangeHandler={inputChangeHandler} />
                <InputFieldWithLabel type={'text'} nameId={'location'} label={'Property Location'} onChangeHandler={inputChangeHandler} />
                <div className="form-group">
                  <label htmlFor="propertyDescription" className="form-label">Property Description</label>
                  <textarea className="form-control" id="description" name="description" onChange={inputChangeHandler}></textarea>
                </div>
                <InputFieldWithLabel type={'number'} nameId={'price'} label={'Property Price'} onChangeHandler={inputChangeHandler}/>
                <div className="row">
                  <div className="col-4">
                    <InputFieldWithLabel type={'number'} nameId={'bedroom'} label={'Bedroom Total'} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-4">
                    <InputFieldWithLabel type={'number'} nameId={'bathroom'} label={'Bathroom Total'} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-4">
                    <InputFieldWithLabel type={'number'} nameId={'building_area'} label={'Building Area'} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Private Pool'} nameId={'private_pool'} options={['available', 'unavailable']} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Living Room'} nameId={'living_room'} options={['available', 'unavailable']} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Kitchen'} nameId={'kitchen'} options={['available', 'unavailable']} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Smoking Area'} nameId={'smoking_area'} options={['available', 'unavailable']} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Parking Area'} nameId={'parking_area'} options={['available', 'unavailable']} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Wifi'} nameId={'wifi'} options={['available', 'unavailable']} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Television'} nameId={'television'} options={['available', 'unavailable']} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Shower'} nameId={'shower'} options={['available', 'unavailable']} onChangeHandler={inputChangeHandler}/>
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Pet'} nameId={'pet'} options={['approved', 'disapproved']} onChangeHandler={inputChangeHandler}/>
                  </div>
                </div>
                <InputFieldWithLabel type={'text'} nameId={'photo'} label={'Property Photo'} onChangeHandler={inputChangeHandler}/>
                <div className="d-flex justify-content-end mb-3">
                  <Link to={'/properties'} name="button" className="btn btn-light m-0">Cancel</Link>
                  <button type="button" name="button" className="btn bg-gradient-primary m-0 ms-2" onClick={createDataHandler}>Create Property</button>
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

export default CreateProperty
