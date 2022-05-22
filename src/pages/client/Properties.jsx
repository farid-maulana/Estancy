import React from 'react'
import Navbar from '../../components/clients/Navbar'
import Footer from '../../components/clients/Footer'
import InputWithLabelIcon from '../../components/form/InputWithLabelIcon'
import Property from '../../components/clients/Property'
import InputField from '../../components/auth/InputField'

const Properties = () => {
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
            <div className='col-lg-3'>
              <div class="pt-1 pb-5 position-sticky">
                <h4>Sort By</h4>
                <div class="my-3 mx-2">
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="customRadio1" />
                    <p class="custom-control-label" for="customRadio1">Recommendation</p>
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="customRadio2" />
                    <p class="custom-control-label" for="customRadio2">Lowest Price</p>
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="customRadio3" />
                    <p class="custom-control-label" for="customRadio3">Highest Price</p>
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="customRadio4" />
                    <p class="custom-control-label" for="customRadio4">Review Score</p>
                  </div>
                </div>
                <h4 class="mt-5">Filter</h4>
                <div class="my-3 mx-2">
                  <h6>Price</h6>
                  <div className='row my-3'>
                    <div className="col mt-lg-n2 mt-2">
                      <InputField type={'number'} nameId={'from'} placeholder={'Min price'} />
                    </div> -
                    <div className="col mt-lg-n2 mt-2">
                      <InputField type={'number'} nameId={'to'} placeholder={'Max price'} />
                    </div>
                  </div>
                </div>
                <div class="my-3 mx-2">
                  <h6>Facility</h6>
                  <div className='row my-3'>
                    <div className='col-12'>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="fcustomCheck1" />
                        <p class="custom-control-label" for="customCheck1">Private Pool</p>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="fcustomCheck2" />
                        <p class="custom-control-label" for="customCheck2">Smoking Area</p>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="fcustomCheck3" />
                        <p class="custom-control-label" for="customCheck3">Parking Area</p>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="fcustomCheck4" />
                        <p class="custom-control-label" for="customCheck4">Wifi</p>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="fcustomCheck5" />
                        <p class="custom-control-label" for="customCheck5">Television</p>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="fcustomCheck6" />
                        <p class="custom-control-label" for="customCheck6">Pet Approved</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-9'>
              <div className="row">
                <Property
                  photo={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/house.jpg'}
                  name={'Villa Carmela'}
                  address={'Jalan Abdul Gani Atas, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur, Indonesia'}
                  bed={'3'}
                  bath={'4'}
                  private_pool={'not available'}
                  price={'1.200.000'} />
                <Property
                  photo={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/pool.jpg'}
                  name={'Villa Carmela'}
                  address={'Jalan Abdul Gani Atas, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur, Indonesia'}
                  bed={'3'}
                  bath={'4'}
                  private_pool={'available'}
                  price={'1.200.000'} />
                <Property
                  photo={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/antalya.jpg'}
                  name={'Villa Carmela'}
                  address={'Jalan Abdul Gani Atas, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur, Indonesia'}
                  bed={'3'}
                  bath={'4'}
                  private_pool={'available'}
                  price={'1.200.000'} />
                <Property
                  photo={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tiny-house.jpg'}
                  name={'Villa Carmela'}
                  address={'Jalan Abdul Gani Atas, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur, Indonesia'}
                  bed={'3'}
                  bath={'4'}
                  private_pool={'available'}
                  price={'1.200.000'} />
                <Property
                  photo={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/air-bnb.jpg'}
                  name={'Villa Carmela'}
                  address={'Jalan Abdul Gani Atas, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur, Indonesia'}
                  bed={'3'}
                  bath={'4'}
                  private_pool={'available'}
                  price={'1.200.000'} />
                <Property
                  photo={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/palm-house.jpg'}
                  name={'Villa Carmela'}
                  address={'Jalan Abdul Gani Atas, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur, Indonesia'}
                  bed={'3'}
                  bath={'4'}
                  private_pool={'not available'}
                  price={'1.200.000'} />
              </div>
              <div class="row justify-space-between py-2">
                <div class="col-lg-4 ms-auto">
                  <ul class="pagination pagination-primary m-4">
                    <li class="page-item">
                      <a class="page-link" href="javascript:;" aria-label="Previous">
                        <span aria-hidden="true"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="javascript:;">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">4</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">5</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;" aria-label="Next">
                        <span aria-hidden="true"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
                      </a>
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