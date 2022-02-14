import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { FaHome } from 'react-icons/fa'
import classNames from 'classnames'

const Projects = () => {
   const activeTab = document.querySelector('.projects-category')

   // activeTab.addEventListener('click', () => {
   //    activeTab.classList.toggle('active')
   // })
   const [check1, setCheck1] = useState(false)

   return (
      <>
         <div className="projects">
            <Header />
            <input type="radio" name="photo" id="check1" checked />
            <input
               type="radio"
               name="photo"
               id="check2"
               // onClick={() => {
               //    setCheck1(!check1)
               // }}
            />
            <input type="radio" name="photo" id="check3" />
            <input type="radio" name="photo" id="check4" />
            <input type="radio" name="photo" id="check5" />
            <input type="radio" name="photo" id="check6" />
            <div className="about-us">
               <div className="about-us-container">
                  <h1>Our Projects</h1>

                  <p>
                     <FaHome className="home-icon" />
                     Home / projects
                  </p>
               </div>
            </div>
            <div className="container">
               <label for="check1" className="projects-category">
                  All
               </label>
               <label for="check2" className="projects-category">
                  Architechture
               </label>
               <label for="check3" className="projects-category">
                  Interior
               </label>
               <label for="check4" className="projects-category">
                  Construction
               </label>
               <label for="check5" className="projects-category">
                  Project Planning
               </label>
               <label for="check6" className="">
                  Renovation
               </label>
            </div>

            <div className="gallery row">
               <div
                  className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture"
                  // {classNames(
                  //    'gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture',
                  //    check1 ? 'd-block' : 'd-none'
                  // )}
               >
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project1.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project2.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project3.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project4.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project5.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project6.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 civil">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project7.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 civil">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project8.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 civil">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project9.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project10.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project11.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project12.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project13.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project14.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project15.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 planning">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project16.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 planning">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project17.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 planning">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project18.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 renovation">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project19.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 renovation">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project20.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 renovation">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project21.jpg')}
                     alt=""
                  />
                  <div className="gallery-overlay">
                     <a href="#">See More</a>
                  </div>
               </div>
            </div>

            <Footer />
         </div>
      </>
   )
}

export default Projects
