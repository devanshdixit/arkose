import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import Footer from './Footer'

const AboutUs = () => {
   return (
      <>
         <Header />
         <div className="about-us-wrapper">
            <div className="about-us">
               <div className="about-us-container">
                  <h1>About Us</h1>
                  <p>
                     <FaHome className="home-icon" />
                     <Link className="home" to="/">
                        {' '}
                        Home
                     </Link>{' '}
                     / about us
                  </p>
                  <p className="container">
                     From more than 10 years, Arkose Buildcom has offered a wide
                     range of construction services in Kanpur and many other
                     cities of Uttar Pradesh. We are strived to maintain it. We
                     aim to eliminate the task of dividing your project between
                     different architecture and construction company.
                  </p>
               </div>
            </div>
         </div>
         <div className="experience-section">
            <div className="col-lg-6 col-md-10 col-sm-12 ">
               <img
                  style={{ width: '100%' }}
                  src="https://arkose.co.in/assets/img/arkose_buildcom_about_us_content.jpg "
                  alt=""
               />
            </div>
            <div className="experience-container">
               <h4>Construction Experience</h4>
               <h1>We Building Everything Best That You Needed</h1>
               <h5>
                  Arkose Buildcom Pvt. Ltd. traces its roots back to 2005 in
                  Kanpur and since then have never looked back. With hundreds of
                  successful projects under our belt, we can proudly say that we
                  are the best in our profession.
               </h5>
               <h5>
                  Arkose Buildcom provide overall planning, coordination, and
                  control of a project, so you don’t have to worry about
                  anything. Our promise as a team is to build community value
                  into every project while delivering with professional
                  expertise. We have a team of experts that helps clients at
                  every stage of the construction process.
               </h5>
            </div>
         </div>
         <div className="team-section container">
            <h5>Our team</h5>
            <h1>Our Motivated Team</h1>
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
                        <h6 style={{ fontWeight: 'bold' }}>+91 7007022736</h6>
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
                        <h6 style={{ fontWeight: 'bold' }}>+91 7007022736</h6>
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
                        <h6 style={{ fontWeight: 'bold' }}>+91 7007022736</h6>
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
         <Footer />
      </>
   )
}

export default AboutUs
