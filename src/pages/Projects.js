import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import classNames from 'classnames';
const Projects = () => {
   const [check1, setcheck1] = useState(false);
   return (
      <>
         <div className="projects">
            <Header />
            <input type="radio" name="photo" id="" checked />
            <input type="radio" name="photo" id="check2" onClick={() => {
               setcheck1(!check1);
            }} />
            <input type="radio" name="photo" id="" />
            <input type="radio" name="photo" id="" />
            <input type="radio" name="photo" id="" />
            <input type="radio" name="photo" id="" />
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
               <div className={classNames("gallery-img-wrapper  col-xl-3 col-lg-4 col-md-6 col-sm-12 architecture",
                  check1 ? "d-block" : "d-none")}>
                  <img
                     className=" img-fluid"
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
            </div>

            <Footer />
         </div>
      </>
   )
}

export default Projects
