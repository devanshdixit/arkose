import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaStar, FaQuoteRight } from 'react-icons/fa'

const ClientSlider = () => {
   return (
      <>
         <div className="client-container" style={{ padding: '100px 0px' }}>
            <div className="container">
               <h5 style={{ color: 'white' }}>| Our Client Say</h5>
               <h1 style={{ color: '#fff', fontSize: '48px' }}>
                  Clients Say About Us
               </h1>
               <Swiper
                  modules={[Autoplay]}
                  spaceBetween={30}
                  autoplay={{ delay: 3000 }}
                  breakpoints={{
                     // when window width is >= 640px
                     640: {
                        width: 640,
                        slidesPerView: 1
                     },
                     // when window width is >= 768px
                     768: {
                        width: 768,
                        slidesPerView: 2
                     }
                  }}
               >
                  <SwiperSlide className="slider ">
                     <div className="client-card">
                        <div
                           className="client-card-wrapper"
                           style={{ padding: '40px' }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 justifyContent: 'space-between',
                                 width: '100%'
                              }}
                           >
                              <div style={{ display: 'flex' }}>
                                 <img
                                    style={{
                                       height: '90px',
                                       width: '90px',
                                       marginRight: '10px'
                                    }}
                                    src={require('../img/client1.jpg')}
                                 />
                                 <div>
                                    <h5 style={{ marginBottom: '0px' }}>
                                       Pankaj Rathor
                                    </h5>
                                    <p className="client-location">
                                       Govind Nagar
                                    </p>
                                 </div>
                              </div>
                              <div>
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                              </div>
                           </div>
                           <div style={{ display: 'flex', marginTop: '20px' }}>
                              <FaQuoteRight id="quote" />
                              <p className="client-text">
                                 I am writing to tell you how pleased we are
                                 with your work. The construction for a 3 BHK in
                                 this cost effective budget is really a big job
                                 and you have done it very well. We are very
                                 happy with the work of Arkose Buildcom.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className="slider ">
                     <div className="client-card">
                        <div
                           className="client-card-wrapper"
                           style={{ padding: '40px' }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 justifyContent: 'space-between',
                                 width: '100%'
                              }}
                           >
                              <div style={{ display: 'flex' }}>
                                 <img
                                    style={{
                                       height: '90px',
                                       width: '90px',
                                       marginRight: '10px'
                                    }}
                                    src={require('../img/client1.jpg')}
                                 />
                                 <div>
                                    <h5 style={{ marginBottom: '0px' }}>
                                       Pankaj Rathor
                                    </h5>
                                    <p className="client-location">
                                       Govind Nagar
                                    </p>
                                 </div>
                              </div>
                              <div>
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                              </div>
                           </div>
                           <div style={{ display: 'flex', marginTop: '20px' }}>
                              <FaQuoteRight id="quote" />
                              <p className="client-text">
                                 I am writing to tell you how pleased we are
                                 with your work. The construction for a 3 BHK in
                                 this cost effective budget is really a big job
                                 and you have done it very well. We are very
                                 happy with the work of Arkose Buildcom.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className="slider ">
                     <div className="client-card">
                        <div
                           className="client-card-wrapper"
                           style={{ padding: '40px' }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 justifyContent: 'space-between',
                                 width: '100%'
                              }}
                           >
                              <div style={{ display: 'flex' }}>
                                 <img
                                    style={{
                                       height: '90px',
                                       width: '90px',
                                       marginRight: '10px'
                                    }}
                                    src={require('../img/client1.jpg')}
                                 />
                                 <div>
                                    <h5 style={{ marginBottom: '0px' }}>
                                       Pankaj Rathor
                                    </h5>
                                    <p className="client-location">
                                       Govind Nagar
                                    </p>
                                 </div>
                              </div>
                              <div>
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                              </div>
                           </div>
                           <div style={{ display: 'flex', marginTop: '20px' }}>
                              <FaQuoteRight id="quote" />
                              <p className="client-text">
                                 I am writing to tell you how pleased we are
                                 with your work. The construction for a 3 BHK in
                                 this cost effective budget is really a big job
                                 and you have done it very well. We are very
                                 happy with the work of Arkose Buildcom.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className="slider ">
                     <div className="client-card">
                        <div
                           className="client-card-wrapper"
                           style={{ padding: '40px' }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 justifyContent: 'space-between',
                                 width: '100%'
                              }}
                           >
                              <div style={{ display: 'flex' }}>
                                 <img
                                    style={{
                                       height: '90px',
                                       width: '90px',
                                       marginRight: '10px'
                                    }}
                                    src={require('../img/client1.jpg')}
                                 />
                                 <div>
                                    <h5 style={{ marginBottom: '0px' }}>
                                       Pankaj Rathor
                                    </h5>
                                    <p className="client-location">
                                       Govind Nagar
                                    </p>
                                 </div>
                              </div>
                              <div>
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                                 <FaStar className="stars" />
                              </div>
                           </div>
                           <div style={{ display: 'flex', marginTop: '20px' }}>
                              <FaQuoteRight id="quote" />
                              <p className="client-text">
                                 I am writing to tell you how pleased we are
                                 with your work. The construction for a 3 BHK in
                                 this cost effective budget is really a big job
                                 and you have done it very well. We are very
                                 happy with the work of Arkose Buildcom.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </>
   )
}

export default ClientSlider
