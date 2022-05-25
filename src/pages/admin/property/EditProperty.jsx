import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/admin/Navbar'
import Sidebar from '../../../components/admin/Sidebar'
import InputFieldWithLabel from '../../../components/auth/InputFieldWithLabel'
import InputSelect from '../../../components/form/InputSelect'
import Footer from '../../../components/admin/Footer'
import { doc, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'

const EditProperty = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [name, setName] = useState(state.data.name)
  const [location, setLocation] = useState(state.data.location)
  const [description, setDescription] = useState(state.data.description)
  const [price, setPrice] = useState(state.data.price)
  const [bedroom, setBedroom] = useState(state.data.bedroom)
  const [bathroom, setBathroom] = useState(state.data.bathroom)
  const [building_area, setBuildingArea] = useState(state.data.building_area)
  const [private_pool, setPrivatePool] = useState(state.data.private_pool)
  const [living_room, setLivingRoom] = useState(state.data.living_room)
  const [kitchen, setKitchen] = useState(state.data.kitchen)
  const [smoking_area, setSmokingArea] = useState(state.data.smoking_area)
  const [parking_area, setParkingArea] = useState(state.data.parking_area)
  const [wifi, setWifi] = useState(state.data.wifi)
  const [television, setTelevision] = useState(state.data.television)
  const [shower, setShower] = useState(state.data.shower)
  const [pet, setPet] = useState(state.data.pet)
  const [photo, setPhoto] = useState(state.data.photo)

  const editDataHandler = async (e) => {
    e.preventDefault()
    const propertyDocRef = doc(db, 'properties', state.id)
    try {
      await updateDoc(propertyDocRef, {
        name: name,
        location: location,
        description: description,
        price: price,
        bedroom: bedroom,
        bathroom: bathroom,
        building_area: building_area,
        private_pool: private_pool,
        living_room: living_room,
        kitchen: kitchen,
        smoking_area: smoking_area,
        parking_area: parking_area,
        wifi: wifi,
        television: television,
        shower: shower,
        pet: pet,
        photo: photo,
        status: 'available',
        updated: Timestamp.now()
      }).then(() => navigate('/properties'))
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
                <h6 className="mb-0">Edit Property</h6>
                <p className="text-sm mb-0">Edit property</p>
                <hr className="horizontal dark my-3" />
                <InputFieldWithLabel type={'text'} nameId={'name'} label={'Property Name'} value={name} onChangeHandler={(e) => setName(e.target.value)} />
                <InputFieldWithLabel type={'text'} nameId={'location'} label={'Property Location'} value={location} onChangeHandler={(e) => setLocation(e.target.value)} />
                <div className="form-group">
                  <label htmlFor="propertyDescription" className="form-label">Property Description</label>
                  <textarea className="form-control" id="description" name="description" onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
                </div>
                <InputFieldWithLabel type={'number'} nameId={'price'} label={'Property Price'} value={price} onChangeHandler={(e) => setPrice(e.target.value)} />
                <div className="row">
                  <div className="col-4">
                    <InputFieldWithLabel type={'number'} nameId={'bedroom'} label={'Bedroom Total'} value={bedroom} onChangeHandler={(e) => setBedroom(e.target.value)} />
                  </div>
                  <div className="col-4">
                    <InputFieldWithLabel type={'number'} nameId={'bathroom'} label={'Bathroom Total'} value={bathroom} onChangeHandler={(e) => setBathroom(e.target.value)} />
                  </div>
                  <div className="col-4">
                    <InputFieldWithLabel type={'number'} nameId={'building_area'} label={'Building Area (m²)'} value={building_area} onChangeHandler={(e) => setBuildingArea(e.target.value)} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Private Pool'} nameId={'private_pool'} options={['available', 'unavailable']} value={private_pool} onChangeHandler={(e) => setPrivatePool(e.target.value)} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Living Room'} nameId={'living_room'} options={['available', 'unavailable']} value={living_room} onChangeHandler={(e) => setLivingRoom(e.target.value)} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Kitchen'} nameId={'kitchen'} options={['available', 'unavailable']} value={kitchen} onChangeHandler={(e) => setKitchen(e.target.value)} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Smoking Area'} nameId={'smoking_area'} options={['available', 'unavailable']} value={smoking_area} onChangeHandler={(e) => setSmokingArea(e.target.value)} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Parking Area'} nameId={'parking_area'} options={['available', 'unavailable']} value={parking_area} onChangeHandler={(e) => setParkingArea(e.target.value)} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Wifi'} nameId={'wifi'} options={['available', 'unavailable']} value={wifi} onChangeHandler={(e) => setWifi(e.target.value)} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Television'} nameId={'television'} options={['available', 'unavailable']} value={television} onChangeHandler={(e) => setTelevision(e.target.value)} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Shower'} nameId={'shower'} options={['available', 'unavailable']} value={shower} onChangeHandler={(e) => setShower(e.target.value)} />
                  </div>
                  <div className="col-4">
                    <InputSelect label={'Pet'} nameId={'pet'} options={['approved', 'disapproved']} value={pet} onChangeHandler={(e) => setPet(e.target.value)} />
                  </div>
                </div>
                <InputFieldWithLabel type={'text'} nameId={'photo'} label={'Property Photo'} value={photo} onChangeHandler={(e) => setPhoto(e.target.value)} />
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
