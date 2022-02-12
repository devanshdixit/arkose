import React from 'react'

const Footer = () => {
   return (
      <>
         <div className="footer">
            <div class="footerInfo">
               <div class="footerContainer">
                  <div class="footerItem">
                     <div class="socialInfo">
                        <div class="mainTitle">
                           <img
                              src={require('../img/arkose_buildcom_logo.png')}
                              alt=""
                              className="footer-logo"
                           />
                        </div>
                        <div class="socialItem">
                           <div class="socialLink facebook">
                              <i class="fab fa-facebook-f"></i>
                           </div>
                           <div class="socialLink instagram">
                              <i class="fab fa-instagram"></i>
                           </div>
                           <div class="socialLink twitter">
                              <i class="fab fa-twitter"></i>
                           </div>
                        </div>
                     </div>

                     <div class="socialInfo">
                        <div class="mainTitle">
                           <h4>
                              {' '}
                              Our Services <span></span>
                           </h4>
                        </div>
                        <div class="socialItem">
                           <a href="#">Architecture </a>
                           <a href="#"> Building Plan Approval</a>
                           <a href="#"> Construction And Civil Work </a>
                           <a href="#"> Construction Consultant </a>
                           <a href="#"> Interior Designing </a>
                           <a href="#"> Project Planning </a>
                           <a href="#"> Renovation </a>
                        </div>
                     </div>

                     <div class="socialInfo">
                        <div class="mainTitle">
                           <h4>
                              {' '}
                              Useful Links <span></span>
                           </h4>
                        </div>
                        <div class="socialItem">
                           <a href="#">Home </a>
                           <a href="#"> About Us</a>
                           <a href="#">Services </a>
                           <a href="#"> Projects </a>
                           <a href="#"> Contact Us </a>
                        </div>
                     </div>

                     <div class="socialInfo">
                        <div class="mainTitle">
                           <h4>
                              {' '}
                              Address <span></span>
                           </h4>
                        </div>
                        <h6 class="addressTitle">Head Office: Kanpur</h6>
                        <p>
                           {' '}
                           117/44, Ground Floor, Sarvodaya Nagar, Kanpur, Uttar
                           Pradesh - 208005. +91 7233042000
                        </p>
                        <h6 class="addressTitle">Head Office: Kanpur</h6>
                        <p>
                           {' '}
                           117/44, Ground Floor, Sarvodaya Nagar, Kanpur, Uttar
                           Pradesh - 208005. +91 7233042000
                        </p>
                        <h6 class="addressTitle">Head Office: Kanpur</h6>
                        <p>
                           {' '}
                           117/44, Ground Floor, Sarvodaya Nagar, Kanpur, Uttar
                           Pradesh - 208005. +91 7233042000
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Footer
