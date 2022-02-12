import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaBusinessTime, FaMedal } from 'react-icons/fa'
import { GiFactory } from 'react-icons/gi'
import { VscFeedback } from 'react-icons/vsc'
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
         <div className="our-work">
            <h5>Our Work</h5>
            <h1>Explore Our Work</h1>
            <Swiper
               modules={[Navigation, Autoplay]}
               spaceBetween={0}
               slidesPerView={3}
               navigation
               autoplay={{ delay: 2000 }}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}
            >
               <SwiperSlide className="slider">
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img1.jpg')}
                     />
                     <h4>CONSTRUCTION SITE</h4>
                     <h6>Construction And Civil Work</h6>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img2.jpg')}
                     />
                     <h4>FARM HOUSE</h4>
                     <h6>Architecture</h6>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img3.jpg')}
                     />
                     <h4>MODERN HOUSE</h4>
                     <h6>Renovation</h6>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img4.jpg')}
                     />
                     <h4>OFFICE</h4>
                     <h6>Interior Design</h6>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img5.jpg')}
                     />
                     <h4>BUILDING CONSTRUCTION</h4>
                     <h6>Construction And Civil Work</h6>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img6.jpg')}
                     />
                     <h4>LIVING ROOM IDEAS</h4>
                     <h6>Interior Design</h6>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
         <div className="facts">
            <div className="facts-container">
               <FaBusinessTime className="icon" />
               <h1>10+</h1>
               <h5>Years Experience</h5>
            </div>
            <div className="facts-container">
               <FaMedal className="icon" />
               <h1>18</h1>
               <h5>Awards</h5>
            </div>
            <div className="facts-container">
               <GiFactory className="icon" />
               <h1>693</h1>
               <h5>Projects Done</h5>
            </div>
            <div className="facts-container">
               <VscFeedback className="icon" />
               <h1>363</h1>
               <h5>Happy Customers</h5>
            </div>
         </div>
         <div className="expert-team">
            <div className="team-section">
               <h1>Our Expert Team</h1>
               <div className="team-members">
                  <div className="imgBox">
                     <div className="img-container">
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

                  <div className="imgBox">
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
                  <div className="imgBox">
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
         <Footer />
      </>
   )
}

export default Home
