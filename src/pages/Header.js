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
                  <Nav.Link href="/app">Home</Nav.Link>
                  <Nav.Link href="/app/about">About Us</Nav.Link>
                  <Nav.Link href="/app/services">Services</Nav.Link>
                  <Nav.Link href="/app/projects">Projects</Nav.Link>
                  <Nav.Link href="/app/contact">Contact Us</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </>
   )
}

export default Header
