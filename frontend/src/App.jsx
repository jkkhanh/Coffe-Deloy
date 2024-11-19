import React, { useEffect } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"
import Nabvbar from './components/Nabvbar';
import bgr from './assets/slider_1.jpg'
import Fotter from './components/Fotter';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Product from './pages/Product';
import Datban from './pages/Datban';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './pages/Order';
import Cart from './pages/Cart';
import PlaceOder from './pages/PlaceOder';


const bgImage = {
  backgroundImage: `url(${bgr})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  position: 'relative'
}

const App = () => {

  const location = useLocation()
  const isLoginPage = location.pathname === '/login';


  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });

  return (
    <div className='mx-auto'>
        { !isLoginPage && <Nabvbar />}
        <Routes>
          <Route path= '/' element = {<Home />} />
          <Route path= '/menu' element = {<Menu />} />
          <Route path='/product/:productId' element = {<Product />} />
          <Route path= '/about' element = {<About />} />
          <Route path= '/contact' element = {<Contact />} />
          <Route path='/datban' element = {<Datban />} />
          <Route path='/cart' element = {<Cart />} />
          <Route path='/place-order' element = {<PlaceOder />} />
          <Route path='/orders' element = {<Order />} />
          <Route path= '/login' element = {<Login />} />
        </Routes>
        { !isLoginPage && <Fotter />}
        <ToastContainer autoClose = {1000} position="top-center" />
    </div>
  )
}

export default App