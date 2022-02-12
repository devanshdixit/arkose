import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Swiper = () => {
   return (
      <>
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
                  <img className="card-img" src={require('../img/img1.jpg')} />
                  <h4>CONSTRUCTION SITE</h4>
                  <h6>Construction And Civil Work</h6>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="our-work-card">
                  <img className="card-img" src={require('../img/img2.jpg')} />
                  <h4>FARM HOUSE</h4>
                  <h6>Architecture</h6>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="our-work-card">
                  <img className="card-img" src={require('../img/img3.jpg')} />
                  <h4>MODERN HOUSE</h4>
                  <h6>Renovation</h6>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="our-work-card">
                  <img className="card-img" src={require('../img/img4.jpg')} />
                  <h4>OFFICE</h4>
                  <h6>Interior Design</h6>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="our-work-card">
                  <img className="card-img" src={require('../img/img5.jpg')} />
                  <h4>BUILDING CONSTRUCTION</h4>
                  <h6>Construction And Civil Work</h6>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="our-work-card">
                  <img className="card-img" src={require('../img/img6.jpg')} />
                  <h4>LIVING ROOM IDEAS</h4>
                  <h6>Interior Design</h6>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   )
}

export default Swiper
