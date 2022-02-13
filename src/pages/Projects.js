import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Projects = () => {
   return (
      <>
         <div className="projects">
            <Header />
            <input type="radio" name="photo" id="check1" checked />
            <input type="radio" name="photo" id="check2" />
            <input type="radio" name="photo" id="check3" />
            <input type="radio" name="photo" id="check4" />
            <input type="radio" name="photo" id="check5" />
            <input type="radio" name="photo" id="check6" />
            <div className="about-us">
               <div className="about-us-container">
                  <h1>Our Projects</h1>
                  <p>Home / projects</p>
               </div>
            </div>
            <div className="container">
               <label for="check1" className="">
                  All
               </label>
               <label for="check2" className="">
                  Architechture
               </label>
               <label for="check3" className="">
                  Interior
               </label>
               <label for="check4" className="">
                  Construction
               </label>
               <label for="check5" className="">
                  Project Planning
               </label>
               <label for="check6" className="">
                  Renovation
               </label>
            </div>

            <div className="gallery row">
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project1.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project2.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project3.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project4.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project5.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project6.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 civil">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project7.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 civil">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project8.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 civil">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project9.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project10.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project11.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project12.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project13.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project14.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 interior">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project15.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 planning">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project16.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 planning">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project17.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 planning">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project18.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 renovation">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project19.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 renovation">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project20.jpg')}
                     alt=""
                  />
               </div>
               <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 renovation">
                  <img
                     className="gallery-img"
                     src={require('../img/projects/project21.jpg')}
                     alt=""
                  />
               </div>
            </div>

            <Footer />
         </div>
      </>
   )
}

export default Projects
