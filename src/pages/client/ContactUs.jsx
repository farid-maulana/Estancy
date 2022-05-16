import React from 'react'
import Footer from '../../components/clients/Footer'
import Navbar from '../../components/clients/Navbar'

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <header className='mb-5'>
                <div className="page-header min-vh-50" style={{ backgroundImage: "url(/img/banner.jpeg)", backgroundPosition: "0% 17.5%" }}>
                    <span className="mask" style={{ background: "linear-gradient(102.65deg, #DFEDFF 24.8%, rgba(255, 255, 255, 0) 90.84%)", opacity: "100%" }}></span>
                    <div className="container">
                        <div className="row">
                            <div className="mx-auto">
                                <h1 className="w-50 mt-5">Contact Us</h1>
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

            <section class="pt-5 pb-7 position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mx-auto text-center">
                            <h2>Contact Us</h2>
                            <p class="lead">Any questions or remarks? Just write us a messaage!</p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-10 mx-auto">
                            <div class="card">
                                <div class="row">
                                    <div class="col-lg-5 d-flex">
                                        <div class="bg-gradient-primary my-lg-3 ms-lg-3 border-radius-md">
                                            <img src="/img/shapes/waves-white.svg" alt="pattern-lines" class="position-absolute start-0 top-0 h-100 opacity-6" />
                                            <div class="card-body p-5 position-relative">
                                                <h3 class="text-white">Contact Information</h3>
                                                <p class="text-white opacity-8 mb-4">Fill up the form and our Team will get back to you within 24 hours.</p>
                                                <div class="d-flex p-2 text-white">
                                                    <div>
                                                        <i class="fas fa-phone text-sm"></i>
                                                    </div>
                                                    <div class="ps-3">
                                                        <span class="text-sm opacity-8">(+40) 772 100 200</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex p-2 text-white">
                                                    <div>
                                                        <i class="fas fa-envelope text-sm"></i>
                                                    </div>
                                                    <div class="ps-3">
                                                        <span class="text-sm opacity-8">[email protected]</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex p-2 text-white">
                                                    <div>
                                                        <i class="fas fa-map-marker-alt text-sm"></i>
                                                    </div>
                                                    <div class="ps-3">
                                                        <span class="text-sm opacity-8">730 Dyonisie Wolf <br /> Bucharest, RO 010458</span>
                                                    </div>
                                                </div>
                                                <div class="mt-4">
                                                    <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Facebook">
                                                        <i class="fab fa-facebook"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Twitter">
                                                        <i class="fab fa-twitter"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Dribbble">
                                                        <i class="fab fa-dribbble"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Instagram">
                                                        <i class="fab fa-instagram"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <form id="contact-form" method="post" autocomplete="off">
                                            <div class="card-body position-relative p-3 ps-0">
                                                <div class="row mt-4">
                                                    <div class="col-md-6">
                                                        <label>First name</label>
                                                        <div class="input-group mb-4">
                                                            <input class="form-control" placeholder="eg. Lucas" aria-label="First Name..." type="text" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 ps-2">
                                                        <label>Last name</label>
                                                        <div class="input-group mb-4">
                                                            <input type="text" class="form-control" placeholder="eg. Jones" aria-label="Last Name..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label>Email address</label>
                                                    <div class="input-group mb-4">
                                                        <input type="email" class="form-control" placeholder="eg. [email protected]" />
                                                    </div>
                                                </div>
                                                <label>What are you interested on?</label>
                                                <div class="d-flex">
                                                    <div>
                                                        <div class="form-check me-3">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                                            <label class="form-check-label" for="flexRadioDefault1">
                                                                Design
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="form-check me-3">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                            <label class="form-check-label" for="flexRadioDefault2">
                                                                Development
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="form-check me-3">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                            <label class="form-check-label" for="flexRadioDefault3">
                                                                Support
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                                            <label class="form-check-label" for="flexRadioDefault4">
                                                                Other
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group mt-4">
                                                    <label>Your message</label>
                                                    <textarea name="message" class="form-control" id="message" rows="3"></textarea>
                                                </div>
                                                <div class="text-end">
                                                    <button type="button" class="btn bg-gradient-dark mb-0">Send message</button>
                                                </div>
                                            </div>
                                        </form>
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

export default ContactUs