import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Features from '../../components/clients/Features'
import Footer from '../../components/clients/Footer'
import Navbar from '../../components/clients/Navbar'
import Property from '../../components/clients/Property'
import Review from '../../components/clients/Review'
import InputWithLabelIcon from '../../components/form/InputWithLabelIcon'
import { db } from '../../firebase/config'

const Home = () => {
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
        <div className="page-header min-vh-90" style={{ backgroundImage: "url(/img/banner.jpeg)", backgroundPosition: "0% 40%" }}>
          <span className="mask" style={{ background: "linear-gradient(102.65deg, #DFEDFF 24.8%, rgba(255, 255, 255, 0) 90.84%)", opacity: "100%" }}></span>
          <div className="container">
            <div className="row">
              <div className="mx-auto">
                <h1 className="w-50">Let Us Show Your Family the Way Home</h1>
                <p className="lead w-50 mt-4">You’ll find tasteful updates throughout this recently renovated, stunning home. Schedule a tour today!</p>
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
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center pb-4">
              <h2>Why Choose Us</h2>
              <p className="lead">We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play </p>
            </div>
          </div>
          <div className="row">
              <Features icon={'fas fa-map-marked-alt'} name={'Find Near You'} description={'We will give the list of villa in arround you at the same time'} color={'primary'} />
              <Features icon={'fas fa-building'} name={'Wide Range of Villa'} description={'We have many types of villas that are suitable for you'} color={'info'}/>
              <Features icon={'fas fa-clock'} name={'24 hours Support'} description={'We available to give you 24 hours service'} color={'warning'}/>
          </div>
        </div>
      </section>
      <div className="page-header min-vh-85 my-5">
        <div className="bg-gray-200 position-absolute fixed-bottom start-0 z-index-0 h-75 mb-n7 overflow-hidden opacity-8">
          <div className="position-absolute w-100 z-inde-1 top-0 mt-n3">
            <svg width="100%" viewBox="0 0 1920 157" version="1.1">
              <title>Path Copy 2</title>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Artboard-Copy" transform="translate(0.000000, -416.000000)" fill="#FFFFFF">
                  <path d="M-1,477.610914 C298.333333,531.905996 618.333333,527.38687 959,464.053537 C1299.66667,400.720204 1619.66667,400.572663 1919,463.610914 L1920,572.610914 L0,572.610914 L-1,477.610914 Z" id="Path-Copy-2" transform="translate(959.500000, 494.526769) scale(-1, -1) translate(-959.500000, -494.526769) "></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="position-absolute fixed-top ms-auto w-75 h-75 border-radius-xl z-index-1 d-none d-sm-none d-md-block me-n4" style={{ backgroundImage: "url(/img/villa.jpeg)", backgroundSize: "cover", backgroundPosition: "top" }}>
        </div>
        <div className="container">
          <div className="row mt-7">
            <div className="col-lg-6 d-flex justify-content-center flex-column">
              <div className="card card-body d-flex justify-content-center shadow-lg border-radius-lg p-5 blur align-items-center z-index-2 shadow-blur">
                <h2 className="text-gradient text-primary mb-4">About Us</h2>
                <p className="text-lg-start text-center mb-0">We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.</p>
                <br />
                <div className="buttons w-100">
                  <button type="button" className="btn btn-outline-dark mb-0 ms-1">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-5 mb-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="px-3 pt-3 pb-0 text-center mb-5">
                <h2 className="mt-3">Best Deal</h2>
                <p>We get insulted by others, lose trust for those others. We get back freezes every winter</p>
              </div>
            </div>
          </div>
          <div className="row px-6">
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
          <div className='d-flex justify-content-center mt-4'>
            <Link to={'/listed-properties'} className='btn bg-gradient-primary btn-rounded'>Load more</Link>
          </div>
        </div>
      </section>
      <section className="py-5 bg-gray-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="text-gradient text-primary mb-0">What random people</h2>
              <h2 className="mb-3">Think about us</h2>
              <p>That’s the main thing people are controlled by! Thoughts- their perception of themselves! </p>
            </div>
          </div>
          <div className="row my-5">
            <Review photo={'/img/team-1.jpg'} name={'Ruby Arrayna'} date={'28 February'} review={'Sumpah ini enak banget, suasananya juga tenang terus pemandangannya jugaa mantap, pokoknya ter the best.'} star={'5'} />
            <Review photo={'/img/team-2.jpg'} name={'Putra Harapan Pratama'} date={'28 February'} review={'Kurang bersih, handuk masih sedikit basah, keset kotor.'} star={'1'} />
            <Review photo={'/img/team-3.jpg'} name={'Pythono'} date={'28 February'} review={'Luas dan nyaman. meski belum berani kemana-mana karena kondisi pandemi. hanya menilmati kamar dan sarapan. pelayanannya ramah.'} star={'4'} />
          </div>
        </div>
      </section>
      <div className="py-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-start">
              <h4>Get tips & tricks every week</h4>
              <p className="mb-0">The latest news, articles and resources sent to your inbox weekely.</p>
            </div>
            <div className="col-lg-5 ms-auto text-end mt-4 mt-lg-0">
              <div className="row">
                <div className="col-lg-8 col-md-4 col-7">
                  <div className="form-group mb-0">
                    <div className="input-group">
                      <div className="input-group">
                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                        <input className="form-control" placeholder="Your Email" type="email" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-5 text-start">
                  <button type="button" className="btn bg-gradient-primary mb-0 h-100">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home