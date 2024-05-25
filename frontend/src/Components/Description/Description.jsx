import React from 'react'
import "./Description.css"
import arrow_icon from'../Assets/Description_arrow.png'


const Description = (props) => {
    const{product}=props;
  return (
    <div className='description'>
      HOME<img src={arrow_icon}alt=''/>SHOP<img src={arrow_icon}alt=''/>{product.category}<img src={arrow_icon}alt=''/>{product.name}
    </div>
  )
}

export default Description
