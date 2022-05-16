import React from 'react'
import CardTeam from '../../components/clients/CardTeam'
import Features from '../../components/clients/Features'
import Footer from '../../components/clients/Footer'
import Navbar from '../../components/clients/Navbar'

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <header className='mb-5'>
                <div className="page-header min-vh-50" style={{ backgroundImage: "url(/img/banner.jpeg)", backgroundPosition: "0% 17.5%" }}>
                    <span className="mask" style={{ background: "linear-gradient(102.65deg, #DFEDFF 24.8%, rgba(255, 255, 255, 0) 90.84%)", opacity: "100%" }}></span>
                    <div className="container">
                        <div className="row">
                            <div className="mx-auto">
                                <h1 className="w-50 mt-5">About Us</h1>
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
            </header>

            <section class="py-7">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-5 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
                            <img class="w-100 border-radius-lg shadow p-3" src="/img/logo.png" alt='logo' />
                        </div>
                        <div class="col-lg-6 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                            <h2 class="mb-4">Our History</h2>
                            <p class="lead">It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. </p>
                            <p class="lead">It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter.</p>
                            <p class="lead">It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-7 bg-info-soft">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto text-center pb-4">
                            <h2>Our Core Values</h2>
                            <p className="lead">We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play </p>
                        </div>
                    </div>
                    <div className="row">
                        <Features icon={'fas fa-map-marked-alt'} name={'Find Near You'} description={'We will give the list of villa in arround you at the same time'} color={'primary'} />
                        <Features icon={'fas fa-building'} name={'Wide Range of Villa'} description={'We have many types of villas that are suitable for you'} color={'info'} />
                        <Features icon={'fas fa-clock'} name={'24 hours Support'} description={'We available to give you 24 hours service'} color={'warning'} />
                    </div>
                </div>
            </section>

            <section class="py-7">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mx-auto mb-5 text-center">
                            <h3>Our Awesome Team</h3>
                            <p>This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <CardTeam photo={'/img/team-4.jpg'} name={'Dafa Bintang Athaillah'} role={'Programmer'} description={'And I love you like Kanye loves Kanye. We need to restart the human foundation.'} />
                        <CardTeam photo={'/img/team-3.jpg'} name={'Mochamad Farid Maulana'} role={'Project Manager'} description={'And I love you like Kanye loves Kanye. We need to restart the human foundation.'} />
                        <CardTeam photo={'/img/team-1.jpg'} name={'Nabila Senja Wahyuningtyas'} role={'Programmer'} description={'And I love you like Kanye loves Kanye. We need to restart the human foundation.'} />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AboutUs