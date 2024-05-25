import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItems = () => {

    const{getTotalCartAmount,handlePromoCodeSubmit,getDiscountedPrice,all_product,cartItems,removeFromCart}=useContext(ShopContext);


  return (
    <div  className='cartitems'> 
      <div  className='cartitems-format-main'> 
      <p key={Math.random()}>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
      </div>
      <hr/>
{all_product.map((e)=>{
if(cartItems[e.id]>0){
    return(
    <div>
    <div className='cartitems-format cartitems-format-main'>
        <img src={e.image} alt='' className='carticon-product-icon'/>
        <p>{e.name}</p>
        <p>{e.new_price}Lei</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>{e.new_price*cartItems[e.id]} Lei</p>
        <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt='remove_icon'/>
    </div>
    <hr/>
  </div>
    )
}
return null;
})}
<div className="cartitems-down">
<div className='cartitems-total'>
<h1>Total Price: </h1>
</div>
<div>
<div className='cartitems-total-item'>
    <p>Subtotal</p>
    <p>{getTotalCartAmount()} Lei</p>
</div>
<hr/>
<div className='cartitems-total-item'>
    <p>Shipping</p>
    <p>Free</p>
</div>
<hr/>
<div className='cartitems-total-item'>
    <h3>Total:</h3>
    <h3>{getDiscountedPrice()} Lei</h3>
</div>
</div>

    </div>
    <div className='cartitems-promocode'>
    <p>If you have a promo code, Enter it here: </p>
    <div className='cartitems-promobox'>
    <form onSubmit={handlePromoCodeSubmit}>
        <input type='text' name="promoCode" placeholder='Promo Code'/>
        <button >Submit</button>
        </form>
</div>
</div>
    </div>
  )
}

export default CartItems
