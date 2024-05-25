import React, { useContext } from 'react'
import './ProductDisplay.css';
import star_icon from"../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const{product}=props;
    const{addToCart}=useContext(ShopContext);
console.log(addToCart)
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image} alt="img product" />
            <img src={product.image} alt="img product" />
            <img src={product.image} alt="img product" />
            <img src={product.image} alt="img product" />
        </div>
        <div className='productdisplay-img'>

            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
        <img src={star_icon} alt="star_icon" />
        <img src={star_icon} alt="star_icon" />
        <img src={star_icon} alt="star_icon" />
        <img src={star_icon} alt="star_icon" />
        <img src={star_dull_icon} alt="star_dull_icon" />
        <p>(8)</p>
        </div>
        <div className='productdisplay-right-prices'>
        <div className='productdisplay-right-prices-new'>{product.new_price}Lei</div>
           <div className='productdisplay-right-prices-old'>{product.old_price}Lei</div>
   
        </div>
    <div className='productdisplay-right-description'>
   <p> Laptop-urile au fost inițial considerate a fi o mică nișă de pe piață și au fost gândite în special pentru domenii de cercetare de specialitate, cum ar fi domeniile militare, contabilitate, reprezentanți de vânzări și alte domenii de activitate care impuneau folosirea unui calculator pentru munca de teren.
    </p>
    </div>
<button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
<p className='productdisplay-right-category'><span>Category :</span>Laptop, ASUS</p>
<p className='productdisplay-right-category'><span>Tags :</span>Modern</p>
        </div>
    </div>
  )
}

export default ProductDisplay
