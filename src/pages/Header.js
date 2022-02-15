import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../img/logo-white.png'
import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <>
         <Navbar
            className="nav"
            sticky="top"
            expand="lg"
            style={{ paddingTop: '0px', paddingBottom: '0px' }}
         >
            <Navbar.Brand className="logo-container">
               <img src={logo} className="logo" style={{ marginTop: '15px' }} />
            </Navbar.Brand>

            <Navbar.Toggle className="hamburger" />
            <Navbar.Collapse className="justify-content-end">
               <Nav className="nav-link-container">
                  <Nav.Link>
                     <Link className="nav-link" to="/">
                        Home
                     </Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link className="nav-link" to="/about">
                        About
                     </Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link className="nav-link" to="/services">
                        Services
                     </Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link className="nav-link" to="/projects">
                        Projects
                     </Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link className="nav-link" to="/contact">
                        Contact Us
                     </Link>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </>
   )
}

export default Header
