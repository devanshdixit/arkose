import React from 'react'
import Header from './Header'

const ContactUs = () => {
   return (
      <>
         <Header />
         <div className="about-us">
            <div className="about-us-container">
               <h1>Contact Us</h1>
               <p>Home / contacts us</p>
            </div>
         </div>
         <div className="contact-us">
            <div classname="contact-form">
               <div className="form-container">
                  <h5>Get Quote</h5>
                  <h1>Request A Quote</h1>
                  <form>
                     <input type="text" placeholder="Enter name" />
                     <input type="text" placeholder="Enter email" />

                     <input type="text" placeholder="Enter subject" />

                     <textarea placeholder="Enter your message"></textarea>
                     <button type="submit" id="submit">
                        Send Message
                     </button>
                  </form>
               </div>
            </div>
            <div className="map">
               <iframe
                  className="map-img"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457122.8586428787!2d80.0239516328125!3d26.479175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c386e6aaaaaab%3A0xb83180ebfce9442e!2sARKOSE%20BUILDCOM%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1644489831975!5m2!1sen!2sin"
               ></iframe>
            </div>
         </div>
      </>
   )
}

export default ContactUs
