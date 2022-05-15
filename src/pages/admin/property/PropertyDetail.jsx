import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CardFasility from '../../../components/admin/CardFasility'
import Footer from '../../../components/admin/Footer'
import Navbar from '../../../components/admin/Navbar'
import PropertyImage from '../../../components/admin/PropertyImage'
import Sidebar from '../../../components/admin/Sidebar'

const PropertyDetail = () => {
  const apiURL = "http://localhost:3001/properties/"
  const navigate = useNavigate()
  const { state } = useLocation()
  const [property] = useState(state)

  const updateDataHandler = () => {
    navigate('/properties/edit', {state: property})
  }

  const deleteDataHandler = () => {
    fetch(apiURL + property.id, { method: 'DELETE' })
      .then(() => {
        navigate('/properties')
      })
  }

  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar activePage={'Properties'} />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className='card-header pb-0'>
                  <div className='d-flex justify-content-between'>
                    <h5>Property Details</h5>
                    <div className="d-flex">
                      <button type="button" className="btn btn-outline-primary btn-icon-only me-2" onClick={updateDataHandler}>
                        <span className="btn-inner--icon"><i className="fas fa-edit"></i></span>
                      </button>
                      <button className="btn btn-outline-danger btn-icon-only me-2" onClick={deleteDataHandler}>
                        <span className="btn-inner--icon"><i className="fas fa-trash"></i></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-5 col-lg-6 text-center">
                      <img className="w-100 border-radius-lg shadow-lg mx-auto" src={property.photo} alt="chair" />
                      <div className="my-gallery d-flex mt-4 pt-2" itemScope itemType="http://schema.org/ImageGallery">
                        <PropertyImage path={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-pink.jpg'} />
                        <PropertyImage path={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg'} />
                        <PropertyImage path={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-steel.jpg'} />
                        <PropertyImage path={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-wood.jpg'} />
                      </div>
                      <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
                        <div className="pswp__bg"></div>
                        <div className="pswp__scroll-wrap">
                          <div className="pswp__container">
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                          </div>
                          <div className="pswp__ui pswp__ui--hidden">
                            <div className="pswp__top-bar">
                              <div className="pswp__counter"></div>
                              <button className="btn btn-white btn-sm pswp__button pswp__button--close">Close (Esc)</button>
                              <button className="btn btn-white btn-sm pswp__button pswp__button--fs">Fullscreen</button>
                              <button className="btn btn-white btn-sm pswp__button pswp__button--arrow--left">Prev
                              </button>
                              <button className="btn btn-white btn-sm pswp__button pswp__button--arrow--right">Next
                              </button>
                              <div className="pswp__preloader">
                                <div className="pswp__preloader__icn">
                                  <div className="pswp__preloader__cut">
                                    <div className="pswp__preloader__donut"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                              <div className="pswp__share-tooltip"></div>
                            </div>
                            <div className="pswp__caption">
                              <div className="pswp__caption__center"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mx-auto">
                      <h3 className="mt-lg-0 mt-4">{property.name}</h3>
                      <div className="rating">
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star-half-alt" aria-hidden="true"></i>
                      </div>
                      <br />
                      <p className="mb-0 mt-3 text-sm">
                        <i className='fas fa-map-marker-alt'></i> {property.location}
                      </p>
                      <h6 className="mb-0 mt-3">Price</h6>
                      <h4>IDR {new Intl.NumberFormat("id-ID").format(property.price)}</h4>
                      <span className={(property.status === 'available' ? 'badge bg-gradient-success' : (property.status === 'unavailable' ? 'badge bg-gradient-danger' : 'badge bg-gradient-secondary'))}>{property.status}</span>
                      <br />
                      <div className="row mt-4">
                        <CardFasility icon={'fas fa-bed'} name={'Bedroom'} value={property.bedroom + ' room'} />
                        <CardFasility icon={'fas fa-bath'} name={'Bathroom'} value={property.bathroom + ' room'} />
                        <CardFasility icon={'fas fa-ruler-combined'} name={'Building Area'} value={property.building_area + 'm²'} />
                        <CardFasility icon={'fas fa-swimmer'} name={'Private Pool'} value={property.private_pool} />
                        <CardFasility icon={'fas fa-couch'} name={'Living Room'} value={property.living_room} />
                        <CardFasility icon={'fas fa-utensils'} name={'Kitchen'} value={property.kitchen} />
                        <CardFasility icon={'fas fa-smoking'} name={'Smoking Area'} value={property.smoking_area} />
                        <CardFasility icon={'fas fa-parking'} name={'Parking Area'} value={property.parking_area} />
                        <CardFasility icon={'fas fa-wifi'} name={'Wifi'} value={property.wifi} />
                        <CardFasility icon={'fas fa-tv'} name={'Television'} value={property.television} />
                        <CardFasility icon={'fas fa-shower'} name={'Shower'} value={property.shower} />
                        <CardFasility icon={'fas fa-dog'} name={'Pet'} value={property.pet} />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <h6 className="mt-2">Description</h6>
                      <div className='text-justify'>
                        <p>{property.description}</p>
                      </div>
                    </div>
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

export default PropertyDetail
