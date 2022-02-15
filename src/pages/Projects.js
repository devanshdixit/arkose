import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { FaHome } from 'react-icons/fa'
import classNames from 'classnames'
import AllData from './AllData'

const Projects = () => {
   const activeTab = document.querySelector('.projects-category')

   // activeTab.addEventListener('click', () => {
   //    activeTab.classList.toggle('active')
   // })
   const [images, setImages] = useState(AllData)

   const allItems = () => {
      const finalData = AllData.filter((value) => {
         return value
      })

      setImages(finalData)
   }

   const onlyArchitect = (categoryItem) => {
      const finalData = AllData.filter((value) => {
         return value.category == categoryItem
      })
      setImages(finalData)
   }

   const onlyInterior = (categoryItem) => {
      const finalData = AllData.filter((value) => {
         return value.category == categoryItem
      })
      setImages(finalData)
   }

   const onlyCivil = (categoryItem) => {
      const finalData = AllData.filter((value) => {
         return value.category == categoryItem
      })
      setImages(finalData)
   }
   const onlyPlanning = (categoryItem) => {
      const finalData = AllData.filter((value) => {
         return value.category == categoryItem
      })
      setImages(finalData)
   }
   const onlyRenovation = (categoryItem) => {
      const finalData = AllData.filter((value) => {
         return value.category == categoryItem
      })
      setImages(finalData)
   }

   return (
      <>
         <div className="projects">
            <Header />
            <div className="about-us">
               <div className="about-us-container">
                  <h1>Our Projects</h1>
                  <p>
                     <FaHome className="home-icon" />
                     Home / projects
                  </p>
               </div>
            </div>
            <div className="container my-3">
               <div className=" row proj-category">
                  <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                     <a onClick={allItems}>All</a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                     <a onClick={() => onlyArchitect('architechture')}>
                        Architecture
                     </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                     <a onClick={() => onlyInterior('interior')}>Interior</a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                     <a onClick={() => onlyCivil('civil')}>Construction</a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                     <a onClick={() => onlyPlanning('planning')}>
                        Project Planning
                     </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                     <a onClick={() => onlyRenovation('renovation')}>
                        Renovation
                     </a>
                  </div>
               </div>
            </div>

            <div className="gallery row">
               {images.map((value) => {
                  return (
                     <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
                        <img
                           className="gallery-img img-fluid"
                           src={value.image}
                           alt=""
                        />
                        <div className="gallery-overlay">
                           <a href="#">See More</a>
                        </div>
                     </div>
                  )
               })}
            </div>

            <Footer />
         </div>
      </>
   )
}

export default Projects
