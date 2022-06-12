import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CardFasility from '../../components/admin/CardFasility'
import PropertyImage from '../../components/admin/PropertyImage'
import Footer from '../../components/clients/Footer'
import Navbar from '../../components/clients/Navbar'

const PropertyDetail = () => {
  const { state } = useLocation()
  const [property] = useState(state)

  return (
    <>
      <Navbar />
      <section className="mb-7 mt-8">
        <div className="container">
          <div className="mb-4">
            <div className='row'>
              <div className="col-12">
                <div className='d-flex justify-content-between'>
                  <Link to={'/listed-properties'}>
                    <i className="fas fa-angle-left me-2"></i>
                    Back
                  </Link>
                </div>
                <div className="row mt-3">
                  <div className="col-xl-5 col-lg-6 text-center">
                    <img className="w-100 border-radius-lg shadow-lg mx-auto" src={property.data.photo} alt="chair" />
                    <div className="my-gallery d-flex mt-4 pt-2" itemScope itemType="http://schema.org/ImageGallery">
                      <PropertyImage path={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-pink.jpg'} />
                      <PropertyImage path={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg'} />
                      <PropertyImage path={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-steel.jpg'} />
                      <PropertyImage path={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-wood.jpg'} />
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
                    <h3 className="mt-lg-0 mt-4">{property.data.name}</h3>
                    <div className="rating">
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star-half-alt" aria-hidden="true"></i>
                    </div>
                    <br />
                    <div className='row'>
                      <p className="col-9 mb-0 mt-3 text-sm">
                        <i className='fas fa-map-marker-alt'></i> {property.data.location}
                      </p>
                      <Link to={'#'} className='col-3 mb-0 mt-3 text-sm text-info'>
                        <i className="fas fa-map-marked-alt"></i> Show on map
                      </Link>
                    </div>
                    <h6 className="mb-0 mt-3">Price</h6>
                    <h4>IDR {new Intl.NumberFormat("id-ID").format(property.data.price)}</h4>
                    <button className='btn bg-gradient-primary mt-2'>Negotiate with owner</button>
                    <div className="row mt-3">
                      <CardFasility icon={'fas fa-bed'} name={'Bedroom'} value={property.data.bedroom + ' room'} />
                      <CardFasility icon={'fas fa-bath'} name={'Bathroom'} value={property.data.bathroom + ' room'} />
                      <CardFasility icon={'fas fa-ruler-combined'} name={'Building Area'} value={property.data.building_area + 'm²'} />
                      <CardFasility icon={'fas fa-swimmer'} name={'Private Pool'} value={property.data.private_pool} />
                      <CardFasility icon={'fas fa-couch'} name={'Living Room'} value={property.data.living_room} />
                      <CardFasility icon={'fas fa-utensils'} name={'Kitchen'} value={property.data.kitchen} />
                      <CardFasility icon={'fas fa-smoking'} name={'Smoking Area'} value={property.data.smoking_area} />
                      <CardFasility icon={'fas fa-parking'} name={'Parking Area'} value={property.data.parking_area} />
                      <CardFasility icon={'fas fa-wifi'} name={'Wifi'} value={property.data.wifi} />
                      <CardFasility icon={'fas fa-tv'} name={'Television'} value={property.data.television} />
                      <CardFasility icon={'fas fa-shower'} name={'Shower'} value={property.data.shower} />
                      <CardFasility icon={'fas fa-dog'} name={'Pet'} value={property.data.pet} />
                    </div>
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-sm-12'>
                    <h6>Description</h6>
                    <div className='text-justify'>
                      <p>{property.data.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mb-7'>
        <div className="container">
          <div className="col-md-12 ms-auto me-auto">
            <div>
              <h4 className="text-center mb-5">Review</h4>
              <div className="d-flex">
                <div>
                  <Link to={'#'}>
                    <div className="position-relative">
                      <div className="blur-shadow-avatar">
                        <img className="avatar rounded-circle" src="/img/team-3.jpg" alt="..." />
                      </div>
                      <div className="colored-shadow start-0 end-0 mx-auto" style={{ backgroundImage: "url('/img/team-3.jpg')" }}></div></div>
                  </Link>
                </div>
                <div className="ms-3 w-100">
                  <h6>Tina Andrew <span className="text-muted text-xs">· Yesterday</span></h6>
                  <div className="rating text-xs">
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star-half-alt" aria-hidden="true"></i>
                      <i className="far fa-star" aria-hidden="true"></i>
                  </div>
                  <br />
                  <p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>
                  <div className="ms-auto text-end">
                    <Link to={'#'} className="btn text-info px-2 btn-link mb-0">
                      <i className="fas fa-thumbs-up" aria-hidden="true"></i> 
                    </Link>
                    <span className='text-xs'>243 people found it helpful</span>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <Link to={'#'}>
                    <div className="position-relative">
                      <div className="blur-shadow-avatar">
                        <img className="avatar rounded-circle" src="/img/team-4.jpg" alt="..." />
                      </div>
                      <div className="colored-shadow start-0 end-0 mx-auto" style={{ backgroundImage: "url('/img/team-4.jpg')" }}></div></div>
                  </Link>
                </div>
                <div className="ms-3 w-100">
                  <h6>John Camber <span className="text-muted text-xs">· 10 Juni 2022</span></h6>
                  <div className="rating text-xs">
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="far fa-star" aria-hidden="true"></i>
                      <i className="far fa-star" aria-hidden="true"></i>
                  </div>
                  <br />
                  <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                  <p>Don't forget, You're awesome!</p>
                  <div className="ms-auto text-end">
                    <Link to={'#'} className="btn text-info px-2 btn-link mb-0">
                      <i className="far fa-thumbs-up" aria-hidden="true"></i> 
                    </Link>
                    <span className='text-xs'>What this review helpful?</span>
                  </div>
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

export default PropertyDetail