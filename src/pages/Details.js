import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationOn, MdMail } from 'react-icons/md'

const Details = () => {
   return (
      <div className="details container">
         <div className="row details-container">
            <div className="col-lg-4 col-md-6 details-card">
               <div className="details-card-container ">
                  <MdLocationOn className="details-icon" />
                  <h1>Our Location</h1>
                  <h6>
                     117/44, Ground Floor Sarvodaya Nagar, Kanpur, Uttar Pradesh
                     208005.
                  </h6>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 details-card">
               <div className="details-card-container">
                  <BsFillTelephoneFill className="details-icon" />
                  <h1>Contact</h1>
                  <h6>(+91) 7007022736</h6>
               </div>
            </div>
            <div className="col-lg-4 col-md-12 details-card">
               <div className="details-card-container">
                  <MdMail className="details-icon" />
                  <h1>Email</h1>
                  <h6>contact@arkose.co.in</h6>
                  <h6>arkosebuildcom@gmail.com</h6>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Details
