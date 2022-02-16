import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { FaHome } from 'react-icons/fa'

const Services = () => {
   return (
      <div>
         <Header />
         <div className="about-us contact-us-main services">
            <div className="about-us-container ">
               <h1>Our-Services</h1>
               <p>
                  <FaHome className="home-icon" />
                  <Link className="home" to="/">
                     {' '}
                     Home
                  </Link>{' '}
                  / our-services
               </p>
            </div>
         </div>
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
                        Arkose Buildcom has a team of senior architects with 10+
                        years of experience. We are constructing, designing and
                        devising buildings that are more functional...
                     </h6>
                     <button id="view-more">
                        <span>Read More</span>
                     </button>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service4.jpg')} />
                     <h2>Interior Designing</h2>
                     <h6>
                        The interior designers of Arkose Buildcom have been
                        transforming ordinary offices, spaces, houses, hotels,
                        restaurants etc into masterpieces for more than 10
                        years. Interior designing is visual art because it is
                        all about playing with colours, goods and styles...
                     </h6>
                     <button id="view-more">
                        <span>Read More</span>
                     </button>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service3.jpg')} />
                     <h2>Construction And Civil Work</h2>
                     <h6>
                        Arkose Buildcom works in all the three areas of
                        construction - buildings, infrastructure and industrial,
                        and building construction can be again divided into
                        residential buildings and commercial buildings.
                     </h6>
                     <button id="view-more">
                        <span>Read More</span>
                     </button>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img
                        className="services"
                        src={require('../img/aprooval.jpg')}
                     />
                     <h2>Building Plan Approval</h2>
                     <h6>
                        The building plan needs to go through various levels of
                        approvals from government personnel which become very
                        lengthy and time consuming. Rather than involving our
                        clients in this annoying process, Arkose Buildcom helps
                        you in approving the plans...
                     </h6>
                     <button id="view-more">
                        <span>Read More</span>
                     </button>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service5.jpg')} />
                     <h2>Project Planning</h2>
                     <h6>
                        A good project planning is the key for fast development
                        within the budget. The project planning by Arkose
                        Buildcom can easily improve the work efficiency and
                        effective material management, which helps you to save a
                        lot of your efforts and money. In Arkose../
                     </h6>
                     <button id="view-more">
                        <span>Read More</span>
                     </button>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service6.jpg')} />
                     <h2>Renovation</h2>
                     <h6>
                        Thinking of doing renovation? Arkose Buildcom is at your
                        service! We do house renovation, kitchen renovation,
                        office renovation and much more. Renovation means to
                        improve or modernize an old, damaged or defective your
                        building or property. Whether you are thinking...
                     </h6>
                     <button id="view-more">
                        <span>Read More</span>
                     </button>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/consult.jpg')} />
                     <h2>Construction Consult</h2>
                     <h6>
                        Construction consultants of Arkose Buildcom help you to
                        make sound preparations for your upcoming projects and
                        ensure that we complete the project on your affordable
                        cost. We provide cost estimates, budgets, select the
                        best eco-friendly materials. Arkose Buildcom...
                     </h6>
                     <button id="view-more">
                        <span>Read More</span>
                     </button>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/support.jpg')} />
                     <h2>Support 24*7</h2>
                     <h6>
                        What is the key to deliver the best client service
                        during the project work? The answer is very often by
                        providing critical operational support for 24*7 to your
                        client by our experienced support team during the
                        project and after the project accomplishment as well. In
                        Arkose...
                     </h6>
                     <button id="view-more">
                        <span>Read More</span>
                     </button>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/chooseus.jpg')} />
                     <h2>Choose Us Because...</h2>
                     <h6>
                        Arkose Buildcom having a team of expert architects and
                        engineers. In Arkose Buildcom, we provide you the best
                        affordable price for your construction work, interior
                        designing, renovation and other services. we also have a
                        team for your 24*7 support. We always...
                     </h6>
                     <button id="view-more">
                        <span>Read More</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default Services
