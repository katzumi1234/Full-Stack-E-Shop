import React from 'react'
import './Offers.css';
import exclucive_image from '../Assets/p1_img.jpg'
import { NavLink } from "react-router-dom";

const Offers = () => {

  return (
    <div className='offers'>
      <div className='offers-left'>
<h1>Exclusive</h1>
<h1>Offers For You</h1>
<p>ONLY THE BEST SELLERS PRODUCTS</p>
<NavLink to="http://localhost:3000/product/1">
  {({ isActive }) => (
<button className={isActive ? "active" : ""}>Check Now</button>
 )}
 </NavLink>
      </div>
      <div className='offers-right'>
        <img src={exclucive_image} alt=''/>


      </div>
    </div>
  )
}

export default Offers
