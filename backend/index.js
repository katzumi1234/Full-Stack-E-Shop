const port = 4000;
const PORT = 5000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser');

const { MongoClient, ServerApiVersion } = require('mongodb');
const { type } = require("os");
const { error } = require("console");


app.use(express.json());
app.use(cors());

// database connection
mongoose.connect("mongodb+srv://Admin:Admin@cluster0.ffhxicz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

//API create
app.get("/",(req,res)=>{
res.send("Express App is Running")
})

//Image Storage
const storage = multer.diskStorage({
destination: './upload/images',
filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
}
})

const upload = multer({storage:storage})

//uplode for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// schema for create products

const Product= mongoose.model("Product",{
    id:{
        type:Number,
        require:true,

    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    new_price:{
        type:Number,
        require:true,
    },
    old_price:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async(req,res)=>{

    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id =last_product.id+1;
    }else{
        id=1;
    }

    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating API for deleting products

app.post('/removeproduct',async(req,res)=>{
await Product.findOneAndDelete({id:req.body.id});
console.log("Removed");
res.json({
    success:true,
    name:req.body.name
})
})

// Creating API for getting all Products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

//Shema for user

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    data:{
        type:Date,
        default:Date.new,
    }

})

// Create endpoint 
app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
return res.status(400).json({success:false,errors:"existing user found with same email adress"})
    }
    let cart = { };
    for(let i = 0; i<300;i++){
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})
//endpoint for user login
app.post('/login',async(req,res)=>{
   let user = await Users.findOne({email:req.body.email});
   if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});

        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
   }
   else{
    res.json({success:false,errors:"Wrong email id"});
   }
})

app.get('/newcollections',async(req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection)
})

//endpoint for popular section

app.get('/popular',async(req,res)=>{
    let products = await Product.find({category:"laptops"});
    let popular = products.slice(0,4);
    res.send(popular);
})
//create middelware to fetch user

const fetchUser = async(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})

    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        }catch(error){
            res.status(401).send({errors:"Please authenticate using valid token"})
        }
    }

}


//add items in card item

app.post('/addtocart',fetchUser,async(req,res)=>{
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]+=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Added")
})

//creating endpoint to remove cart data
app.post('/removefromcart',fetchUser,async(req,res)=>{

    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Removed")
})

//creating endpoint to get cartdata

app.post("/getcart",fetchUser,async(req,res)=>{
let userData = await Users.findOne({_id:req.user.id});
res.json(userData.cartData);
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port "+port)
    }
    else{
        console.log("Error : " +error)
    }
})


app.use(bodyParser.json());
app.post('/submit', (req, res) => {
    const { email } = req.body;

    // Perform any necessary validation
    if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    // In a real-world scenario, you would process the email here
    // For demonstration purposes, we'll just send back a success response
    res.json({ success: true });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});