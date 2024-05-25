import React,{createContext, useEffect, useState} from "react";



export const ShopContext = createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index=0; index<300+1; index++){
    cart[index]=0;
    }
    return cart;
}



const ShopContextProvider = (props) =>{

    const [all_product,setAll_Product]=useState([]);
    const[cartItems,setCartItems]=useState(getDefaultCart());
    const [discountedPrice, setDiscountedPrice] = useState(-1);

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",

            }).then((respons)=>respons.json())
            .then((data)=>setCartItems(data));
        }
    },[])

const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(itemId)
    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/addtocart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',

            },
            body:JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response)
        .then((data)=>console.log(data));
    }

}
const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/removefromcart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',

            },
            body:JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    }
}


const getTotalCartItems = ()=>{
    let totalItem=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem+=cartItems[item];
        }
    }
    return totalItem;
}
const getTotalCartAmount=()=>{
    let totalAmount = 0;
    for(const item in cartItems){
if(cartItems[item]>0){
    let itemInfo=all_product.find((product)=>product.id===Number(item))
    totalAmount+=itemInfo.new_price*cartItems[item]
}

    }
    return totalAmount;
}

const getDiscountedPrice=() => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            totalAmount += itemInfo.new_price * cartItems[item];
        }
        if (discountedPrice !== -1) {
            return discountedPrice; 
        } 
    }

    return totalAmount;
}
function applyPromoCode(promoCode, cartItems,item) {

    const promoCodes = {
        'ALEX20': 0.2, // 20% discount
        'ALEX50': 0.5, // 50% discount
        'ALEX100': 1 // 
        
    };
    if (promoCodes.hasOwnProperty(promoCode)) {
      const discount = promoCodes[promoCode];
      const totalAmount = getDiscountedPrice(cartItems,item);
      const discountedPrice = totalAmount * (1 - discount);
      return discountedPrice;
  } else {
      return -1;
  }
  
}
const handlePromoCodeSubmit = (event) => {
event.preventDefault();
const promoCode = event.target.elements.promoCode.value;
const discountedPrice = applyPromoCode(promoCode, cartItems);
if (discountedPrice !== -1) {
    
    alert(`Discounted price after applying promo code ${promoCode}: ${discountedPrice}Lei`);

    setDiscountedPrice(discountedPrice);
} else {
    alert(`Invalid promo code: ${promoCode}`);
    setDiscountedPrice(-1);
}
}

const contextValue={getTotalCartItems,getDiscountedPrice,handlePromoCodeSubmit,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
