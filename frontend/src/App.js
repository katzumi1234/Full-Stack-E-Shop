import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from'./Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import laptops_banner from'./Components/Assets/banner_laptops.png'
import pc_banner from'./Components/Assets/banner_pc.png'
import p_banner from'./Components/Assets/banner_p.png'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>

      <Route path='/' element={<Shop/>}/>
      <Route path='/laptops' element={<ShopCategory banner={laptops_banner} category="laptops"/>}/>
      <Route path='/PC' element={<ShopCategory banner={pc_banner} category="PC"/>}/>
      <Route path='/peripheral' element={<ShopCategory banner={p_banner} category="peripheral"/>}/> 
      <Route path="product" element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>


      </Routes>

<Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
