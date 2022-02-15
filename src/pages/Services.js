import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { FaHome } from 'react-icons/fa'

const Services = () => {
   return (
      <div>
         <Header />
         <div className="about-us contact-us-main services">
            <div className="about-us-container ">
               <h1>Our-Services</h1>
               <p>
                  <FaHome className="home-icon" />
                  <Link className="home" to="/">
                     {' '}
                     Home
                  </Link>{' '}
                  / our-services
               </p>
            </div>
         </div>
         <div className="section-offer container">
            <div className="sub-section-offer">
               <h6>| What We Offer</h6>
               <h1>Arkose Best Services</h1>
            </div>
            <div>
               <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service1.jpg')} />
                     <h2>Architecture</h2>
                     <h6>
                        A perfect Architecture Design customizes your
                        residential or commercial building exactly as you want.
                        Arkose Buildcom has a team of senior architects with 10+
                        years of experience. We are constructing, designing and
                        devising buildings that are more functional, aesthetical
                        and long lasting. The architects of Arkose Buildcom have
                        architected 550+ projects with 100% clients satisfaction
                        . We work with spaces and elements to create a coherent
                        and functional structure. Let's design your dream place
                        with our best architects and engineers of Arkose
                        Buildcom. For your better understanding we are
                        simplifying the word Architecture which is a general
                        term to describe the physical structures of buildings
                        and other objects.
                     </h6>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service4.jpg')} />
                     <h2>Interior Designing</h2>
                     <h6>
                        The interior designers of Arkose Buildcom have been
                        transforming ordinary offices, spaces, houses, hotels,
                        restaurants etc into masterpieces for more than 10
                        years. Interior designing is visual art because it is
                        all about playing with colours, goods and styles. Our
                        interior designers have successfully delivered 500+
                        project before the deadlines. Our clients often give
                        feedbacks for appreciation and tell us how impressive
                        the interior of their houses, offices and more. The
                        expert interior designers of Arkose Buildcom can make
                        indoor spaces of your property more beautiful with their
                        creative ideas by selecting essential decorative items
                        such as colours, lighting, paintings, furniture etc.
                        Arkose Buildcom is with you in interior designing to
                        bring order and coherence to your projects.
                     </h6>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service3.jpg')} />
                     <h2>Construction And Civil Work</h2>
                     <h6>
                        Arkose Buildcom works in all the three areas of
                        construction - buildings, infrastructure and industrial,
                        and building construction can be again divided into
                        residential buildings and commercial buildings.
                        Construction and civil work are required a lot of hard
                        work and dedication. Arkose Buildcom as a team ensure
                        that you will not face burden on your head during your
                        site construction. Civil works mean maintenance, design
                        and construction of roads, railways, buildings, water
                        reservoirs, subdivisions, airports, bridges, sewer
                        systems, tunnels and dams. So choose Arkose Buildcom for
                        your project as soon as possible.
                     </h6>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img
                        className="services"
                        src={require('../img/aprooval.jpg')}
                     />
                     <h2>Building Plan Approval</h2>
                     <h6>
                        The building plan needs to go through various levels of
                        approvals from government personnel which become very
                        lengthy and time consuming. Rather than involving our
                        clients in this annoying process, Arkose Buildcom helps
                        you in approving the plans. We are here to provide you
                        approvals of your plans without involving you in those
                        time taking processes. Arkose Buildcom returns you the
                        peace of mind that we help you for all approvals related
                        to your property and project. For any building
                        construction, the builder will need to have a set of
                        approvals from government departments as well as
                        sanctions from all the authorities concerned and our
                        team will always ready without wasting the time and
                        resources.
                     </h6>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service5.jpg')} />
                     <h2>Project Planning</h2>
                     <h6>
                        A good project planning is the key for fast development
                        within the budget. The project planning by Arkose
                        Buildcom can easily improve the work efficiency and
                        effective material management, which helps you to save a
                        lot of your efforts and money. In Arkose Buildcom, the
                        project planning of difficult areas of a project looks
                        very simple. We are providing a brief idea how to make
                        your project planning simple and effective - (i) Our
                        Experts Create the Schedule for Your Projects. (ii) We
                        Set our Daily, Weekly and Monthly Targets and Prioritize
                        them. (iii) We Identify the Problems in a Risk Task.
                        (iv) We Review and Modify the Project Plan according to
                        your needs. So do not compromise to adopt the best
                        project planning by Arkose Buildcom for your all
                        project.
                     </h6>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/service6.jpg')} />
                     <h2>Renovation</h2>
                     <h6>
                        Thinking of doing renovation? Arkose Buildcom is at your
                        service! We do house renovation, kitchen renovation,
                        office renovation and much more. Renovation means to
                        improve or modernize an old, damaged or defective your
                        building or property. Whether you are thinking about a
                        whole house renovation, or the renovation of your
                        kitchen, bathroom, restaurant, office etc, the best
                        designs by specialists of Arkose Buildcom will help you
                        to think new ideas for enhancing the beauty and value of
                        your home or property. As one of the highly experienced
                        in the market for more than 10 years, Arkose Buildcom
                        also assure that during our services we do not
                        compromise with your comfort. We, throughout the
                        renovation, provide you reliable cost information so
                        that you will feel confident and happiness with Arkose
                        Buildcom.
                     </h6>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/consult.jpg')} />
                     <h2>Construction Consult</h2>
                     <h6>
                        Construction consultants of Arkose Buildcom help you to
                        make sound preparations for your upcoming projects and
                        ensure that we complete the project on your affordable
                        cost. We provide cost estimates, budgets, select the
                        best eco-friendly materials. Arkose Buildcom resolve
                        differences between contractors and project owners by
                        providing you 10+ years experienced construction
                        consultants. Our consultants also provide guidance and
                        advice for your future plans and goals. We complete your
                        project with perfection in affordable prices. Arkose
                        Buildcom not only develops the project design but keep
                        on modifying design until you satisfy.As per our 10+
                        years of experience, we provide you the best cost
                        management by our consultants, which result in more
                        transparency, good control during work and completing
                        the project within the budget and on time.
                     </h6>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/support.jpg')} />
                     <h2>Support 24*7</h2>
                     <h6>
                        What is the key to deliver the best client service
                        during the project work? The answer is very often by
                        providing critical operational support for 24*7 to your
                        client by our experienced support team during the
                        project and after the project accomplishment as well. In
                        Arkose Buildcom, the roles of support team is performed
                        by more senior level of experience and expertise
                        professionals. Once our clients are living in their
                        newly constructed or renovated home or other properties,
                        Arkose Buildcom want you to love your home or property
                        and feel that our clients have chosen the best company
                        for your project which optimize your project cost and
                        increase the value of your home or property.Never
                        hesitate to call us and discuss your issues with our
                        experts because Arkose Buildcom is always committed to
                        your supporting by 24*7.
                     </h6>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                     <img className="" src={require('../img/chooseus.jpg')} />
                     <h2>Choose Us Because...</h2>
                     <h6>
                        Arkose Buildcom having a team of expert architects and
                        engineers. In Arkose Buildcom, we provide you the best
                        affordable price for your construction work, interior
                        designing, renovation and other services. we also have a
                        team for your 24*7 support. We always listen to your all
                        queries carefully and provide you the solutions. Our
                        clients often contact us when they are willing to
                        purchase or sell their properties and we have always
                        satisfied our clients with the best prices. We advise
                        our clients who want to sell their property to ensure
                        that the property is clean and looking good in condition
                        before the visit by clients, as this will have an impact
                        on the mind of the buyer and our team as well in the
                        first visit and also help you to get a good market price
                        easily with less efforts in fewer time. Let's build your
                        dream project with Arkose Buildcom.
                     </h6>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default Services
