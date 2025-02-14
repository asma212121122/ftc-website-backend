import React from 'react'
import './home.css'
import Logo from './images/Logo.png';
const Navbar = () =>{
  return (
    <nav className='nav'> 
        <div className="logo"><img src={Logo} alt="Logo" /></div>
        <div className="nav-links">
            <a href="#Home">Home</a>
            <a href="#AboutUs">About Us</a>
            <a href="#Trainings">Training & Workshops</a>
            <a href="#Events">Events</a>
            <a href="#ContactUs">Contact Us</a>
        </div>
    </nav>
  )
}
export default Navbar;