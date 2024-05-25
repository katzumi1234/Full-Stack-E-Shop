import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {


const[image,setImage]=useState(false);
const[productDetails,setProductDetails]=useState({
    name:"",
    image:"",
    category:"laptops",
    new_price:"",
    old_price:""
});

const imageHandler=(e)=>{
    setImage(e.target.files[0]);
}
const changeHandler = (e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
}

const Add_Product = async()=>{

    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);
    await fetch('http://localhost:4000/upload',{
       method:'POST',
       headers:{
        Accept:'application/json',
       },
       body:formData, 
    }).then((resp)=>resp.json()).then((data)=>{responseData=data})
if(responseData.success)
{
    product.image=responseData.image_url;
    console.log(product)

    await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
    }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("Failed")
    })


}
}


  return (
    <div className='add-product'>
      <div className='addproduct-itemfield'>
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here'/>
      </div>
      <div className='addproduct-price'>
   
        <div className='addproduct-itemfield'>
            <p>New Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here'/>
        </div>
        <div className='addproduct-itemfield'>
            <p>Old Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here'/>
        </div>
      </div>
      <div className='addproduct-itemfield'>
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler}name='category' className='add-product-selector'>
            <option value="laptops">Laptops</option>
            <option value="PC">PC</option>
            <option value="peripheral">Peripheral</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label  htmlFor="file-input">
            <img className='addproduct-thumnail-img' src={image?URL.createObjectURL(image):upload_area} alt=''/>
        </label>
        <input onChange={imageHandler} type='file' name='image' id='file-input' hidden/>
      </div>
      <button onClick={()=>{Add_Product()}}className='add-product-btn'>ADD</button>
    </div>
  )
}

export default AddProduct