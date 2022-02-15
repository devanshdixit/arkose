import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Details from './Details'
import { FaBusinessTime, FaMedal } from 'react-icons/fa'
import { GiFactory } from 'react-icons/gi'
import { VscFeedback } from 'react-icons/vsc'
import { TiTick } from 'react-icons/ti'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

const Home = () => {
   return (
      <>
         <Header />
         <div className="main-section">
            <div className="main-container">
               <h1>
                  Arkose Buildcom is your best homes, offices Architecture and
                  Construction solution.
               </h1>
               <p>
                  We provide overall planning, coordination and control of a
                  project, so you don’t have to worry about anything. Our
                  promise as a contractor is to build community value into every
                  project while delivering professional expertise.
               </p>
            </div>
         </div>
         <Details />
         <div className="section-offer container">
            <div className="sub-section-offer">
               <h6>| What We Offer</h6>
               <h1>Arkose Best Services</h1>
            </div>
            <div>
               <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service1.jpg')} />
                     <h2>Architecture</h2>
                     <h6>
                        A perfect Architecture Design customizes your
                        residential or commercial building exactly as you want.
                        It is planning, designing, and devising buildings that
                        are more functional, aesthetical and durable. We work
                        with space and elements to create a...
                     </h6>
                     <a href="#">Read More</a>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service2.jpg')} />
                     <h2>Interior Designing</h2>
                     <h6>
                        Interior Designers of Arkose Buildcom can transform
                        ordinary office spaces, houses, hotels, etc. into
                        masterpieces. Interior designing is visual art because
                        it's all about dealing with colors and styles. To make
                        indoor spaces more...
                     </h6>
                     <a href="#">Read More</a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service3.jpg')} />
                     <h2>Construction And Civil Work</h2>
                     <h6>
                        Construction And civil work are the processes to build
                        or refurbish your site. These processes are required a
                        lot of hard work and dedication. Arkose Buildcom as a
                        team ensure that you will not face burden on your head
                        during your...
                     </h6>
                     <a href="#">Read More</a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service4.jpg')} />
                     <h2>Interior Designing</h2>
                     <h6>
                        Interior Designers of Arkose Buildcom can transform
                        ordinary office spaces, houses, hotels, etc. into
                        masterpieces. Interior designing is visual art because
                        it's all about dealing with colors and styles. To make
                        indoor spaces more...
                     </h6>
                     <a href="#">Read More</a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service5.jpg')} />
                     <h2>Project Planning</h2>
                     <h6>
                        A good project planning is the key for fast development
                        within the budget. Construction planning improves work
                        efficiency and effective material management. So do not
                        compromise to adopt good construction planning...
                     </h6>
                     <a href="#">Read More</a>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service6.jpg')} />
                     <h2>Renovation</h2>
                     <h6>
                        Thinking for any kind of renovation work! Why don't
                        choose Arkose Buildcom for that? Bedroom, kitchen,
                        bathroom renovation and much more. Renovation means to
                        make improvements on an existing building or home...
                     </h6>
                     <a href="#">Read More</a>
                  </div>
               </div>
            </div>
         </div>
         <div className="constrcution-eng row">
            <div className="constrcution-eng-text col-xl-6 col-lg-6 col-md-12 container">
               <h6>| Working With Excellence</h6>
               <h1>Construction & Engineering Real Solutions.</h1>
               <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                  dolor sit amet, consectetur adipiscinglorem ipsum dolor sit
                  amet, consectetur adipiscing
               </p>
               <ul>
                  <li>
                     <TiTick className="tick" /> lorem ipsum dolor sit amet,
                     consectetur adipis
                  </li>
                  <li>
                     <TiTick className="tick" /> lorem ipsum dolor sit amet,
                     consectetur adipis
                  </li>
                  <li>
                     <TiTick className="tick" /> lorem ipsum dolor sit amet,
                     consectetur adipis
                  </li>
                  <li>
                     <TiTick className="tick" /> lorem ipsum dolor sit amet,
                     consectetur adipis
                  </li>
                  <li>
                     <TiTick className="tick" /> lorem ipsum dolor sit amet,
                     consectetur adipis
                  </li>
               </ul>

               <button id="view-more">
                  <span>View More</span>
               </button>
            </div>
            <div className="constrcution-eng-img img-fluid col-xl-6 col-lg-6 col-md-12">
               <img src={require('../img/construction-engineering.jpg')} />
            </div>
         </div>
         <div className="container">
            <div className="facts row">
               <div className="facts-container col-lg-3 col-md-6 ">
                  <FaBusinessTime className="icon" />
                  <h1>10+</h1>
                  <h5>Years Experience</h5>
               </div>
               <div className="facts-container col-lg-3 col-md-6">
                  <FaMedal className="icon" />
                  <h1>18</h1>
                  <h5>Awards</h5>
               </div>
               <div className="facts-container col-lg-3 col-md-6">
                  <GiFactory className="icon" />
                  <h1>693</h1>
                  <h5>Projects Done</h5>
               </div>
               <div className="facts-container col-lg-3 col-md-6">
                  <VscFeedback className="icon" />
                  <h1>363</h1>
                  <h5>Happy Customers</h5>
               </div>
            </div>
         </div>
         <div className="expert-team ">
            <div className="team-section">
               <h6>| Would Like To Hear From You!</h6>
               <h1>Our Expert Team</h1>
               <span>
                  lorem ipsum dolor sit amet, consectetur adipis lorem ipsum
                  dolor sit amet, consectetur adipis
               </span>
               <div className="team-members container">
                  <div className="imgBox col-lg-3">
                     <div>
                        <img
                           className="team-member"
                           src="https://arkose.co.in/assets/img/arkose_buildcom_about_us_interior_designer.jpg"
                        />
                     </div>
                     <h6>Senior Interior Designer</h6>
                     <h5>MRS. DIVYA SHARMA</h5>
                     <div className="image-overlay">
                        <div className="social-icon">
                           <img
                              className="social-icon-img"
                              src={require('../img/whatsapp.png')}
                           />
                           <h6 style={{ fontWeight: 'bold' }}>
                              +91 7007022736
                           </h6>
                        </div>

                        <div className="social-icon">
                           <img
                              className="social-icon-img"
                              src={require('../img/email.png')}
                           />
                           <h6 style={{ fontWeight: 'bold' }}>
                              interiordesigner@arkose.co.in
                           </h6>
                        </div>
                     </div>
                  </div>

                  <div className="imgBox col-lg-3">
                     <img
                        className="team-member"
                        src="https://arkose.co.in/assets/img/arkose_buildcom_about_us_autocad_designer.jpg"
                     />
                     <h6>Senior Auto CAD Designer</h6>
                     <h5>MR. GYANENDRA SHARMA</h5>
                     <div className="image-overlay">
                        <div className="social-icon">
                           <img
                              className="social-icon-img"
                              src={require('../img/whatsapp.png')}
                           />
                           <h6 style={{ fontWeight: 'bold' }}>
                              +91 7007022736
                           </h6>
                        </div>

                        <div className="social-icon">
                           <img
                              className="social-icon-img"
                              src={require('../img/email.png')}
                           />
                           <h6 style={{ fontWeight: 'bold' }}>
                              caddesigner@arkose.co.in
                           </h6>
                        </div>
                     </div>
                  </div>
                  <div className="imgBox col-lg-3">
                     <img
                        className="team-member"
                        src="https://arkose.co.in/assets/img/arkose_buildcom_image_comming_soon.jpg"
                     />
                     <h6>Senior Architect</h6>
                     <h5>MR. J.P. SHARMA</h5>
                     <div className="image-overlay">
                        <div className="social-icon">
                           <img
                              className="social-icon-img"
                              src={require('../img/whatsapp.png')}
                           />
                           <h6 style={{ fontWeight: 'bold' }}>
                              +91 7007022736
                           </h6>
                        </div>

                        <div className="social-icon">
                           <img
                              className="social-icon-img"
                              src={require('../img/email.png')}
                           />
                           <h6 style={{ fontWeight: 'bold' }}>
                              architect@arkose.co.in
                           </h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div style={{ background: '#ff631b', padding: '40px 0px' }}>
            <div
               className="container"
               style={{ display: 'flex', justifyContent: 'space-between' }}
            >
               <div>
                  <h3>Looking for Professionals to build your dream home?</h3>
                  <p style={{ marginBottom: '0px' }}>
                     We offer the best engineers and architects to make your
                     dreams come true.
                  </p>
               </div>
               <div>
                  <button
                     id="talktogether"
                     style={{
                        textDecoration: 'none',
                        color: '#fff',
                        border: '1px solid #fff',
                        borderRadius: '30px',
                        padding: '15px',
                        textAlign: 'center',
                        background: '#ff631b'
                     }}
                  >
                     LET'S TALK TOGETHER
                  </button>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="who-we-are row">
               <div className="col-lg-6 col-md-12">
                  <img
                     style={{ width: '100%' }}
                     src={require('../img/who-we-are.jpg')}
                     alt=""
                  />
               </div>
               <div
                  className="who-we-are-text col-lg-6 col-md-12"
                  style={{ padding: '40px' }}
               >
                  <h2>WHO WE ARE</h2>
                  <p>
                     Arkose Buildcom Pvt. Ltd. traces its roots back to 2005 in
                     Kanpur and since then have never looked back. With hundreds
                     of successful projects under our belt, we can proudly say
                     that we are one of the most trusted companies in Kanpur.
                     From more than 10 years, Arkose Buildcom has offered a wide
                     range of construction and architecture services in Kanpur
                     and many other cities of Uttar Pradesh. We strive for
                     perfection. We aim to eliminate the task of dividing your
                     project between different architectures and construction
                     companies.
                  </p>
                  <button>LEARN OUR SERVICES</button>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Home
