import React from 'react'
import './Navbar.css'
import navlogo from'../../assets/nav-logo.png'
import navProfile from'../../assets/nav-profile.jpg'
import arrow from '../../assets/arrow_icon.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navLine'>
        <img src={navlogo} alt="navlogo" className='nav-logo'/>
        <div className='navcolumn'>
      <h1><b>SHOPPER</b></h1>
      <p>Admin Panel</p>
      </div>
      <img src={navProfile} alt="navProfile" className='navProfile'/>
      <img src={arrow} alt="navProfile" className='arrow'/>
      </div>
    </div>
  )
}

export default Navbar
