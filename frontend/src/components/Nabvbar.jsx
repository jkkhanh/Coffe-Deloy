import React, { useEffect, useState } from 'react'
import logo from '../assets/logocf.png'
import { FaHome } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { FaCoffee } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import order  from '../assets/order-icom.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';



const Nabvbar = () => {
    
     const {getCartCount, token, setToken, setCartItems} = useContext(ShopContext)
     const navigate = useNavigate()

     const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
        navigate('/login')
     }

        const getUserCart = async (token) => {
        try {
            
            const response = await axios.post(backendUrl + '/api/cart/get', {}, {headers:{token}})
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    

  return (
    <div className='bg-yellow-400 '>
        <div className='px-3 py-3 mx-auto w-[1500px]'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <Link to = '/' className='flex items-center'>
                        <img src={logo} alt='' className='w-28'/>
                        <p className=' font-semibold text-xl font-cursive text-white'>Coffe Home</p>
                    </Link>
                    <div className='ml-40'>
                        <ul className='flex items-center gap-6'>
                            <NavLink to = '/' className={({isActive}) => `flex items-center gap-2 font-semibold px-3 py-1.5 cursor-pointer rounded-full transition-all duration-300 ${isActive ? 'bg-blue-500 text-white scale-110' : 'hover:scale-110 hover:text-white hover:bg-blue-500'}`}><FaHome  className='text-lg'/>Trang chủ</NavLink>
                            <NavLink to ='/menu' className={({isActive}) => `flex items-center gap-2 font-semibold px-3 py-1.5 cursor-pointer rounded-full transition-all duration-300 ${isActive ? 'bg-blue-500 text-white scale-110' : 'hover:scale-110 hover:text-white hover:bg-blue-500'}`}><IoMdMenu  className='text-lg'/>Thực đơn</NavLink>
                            <NavLink to = '/about' className={({isActive}) => `flex items-center gap-2 font-semibold px-3 py-1.5 cursor-pointer rounded-full transition-all duration-300 ${isActive ? 'bg-blue-500 text-white scale-110' : 'hover:scale-110 hover:text-white hover:bg-blue-500'}`}><FiCoffee  className='text-lg'/>Về chúng tôi</NavLink>
                            <NavLink to = '/contact' className={({isActive}) => `flex items-center gap-2 font-semibold px-3 py-1.5 cursor-pointer rounded-full transition-all duration-300 ${isActive ? 'bg-blue-500 text-white scale-110' : 'hover:scale-110 hover:text-white hover:bg-blue-500'}`}><RiContactsLine   className='text-lg'/> Liên hệ</NavLink>
                            <NavLink to  = '/datban' className={({isActive}) => `flex items-center gap-2 font-semibold px-3 py-1.5 cursor-pointer rounded-full transition-all duration-300 ${isActive ? 'bg-blue-500 text-white scale-110' : 'hover:scale-110 hover:text-white hover:bg-blue-500'}`}><FaCoffee  className='text-lg'/>Đặt bàn</NavLink>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='bg-white px-2 py-2 rounded-full border-2 border-blue-500 relative group'>
                        <NavLink to = '/cart' >
                            <div className='overflow-hidden flex items-center transition-all duration-300 group-hover:w-[110px] w-[30px] h-[30px]'>
                                <p className='text-transparent font-semibold ml-1 group-hover:text-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100'>
                                    Giỏ hàng
                                </p>
                                <FaOpencart className='absolute right-2.5 text-2xl group-hover:scale-110 transition-all duration-300' />
                            </div>
                        </NavLink>
                        <button className='absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-semibold bg-green-600 text-white rounded-full'>{getCartCount()}</button>
                    </div>

                    <div className='bg-white px-2 py-2 rounded-full border-2 border-blue-500 relative group'>
                        <NavLink to = '/orders' >
                            <div className='overflow-hidden flex items-center transition-all duration-300 group-hover:w-[110px] w-[30px] h-[30px]'>
                                <p className='text-transparent font-semibold ml-1 group-hover:text-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100'>
                                    Đơn hàng
                                </p>
                                <img src={order} alt='' className='w-8 absolute right-[5px] text-2xl group-hover:scale-110 transition-all duration-300' />
                            </div>
                        </NavLink>
                    </div>
                    
                    { 
                        token ? (
                            <button onClick={logout} className='px-4 py-2 rounded-lg bg-white font-semibold border-2 border-blue-500 hover:scale-110 transition-all duration-300'>Đăng xuất</button>
                            ) : (
                            <Link to='/login'><button className='px-4 py-2 rounded-lg bg-white font-semibold border-2 border-blue-500 hover:scale-110 transition-all duration-300'>Đăng nhập</button></Link>
                         )
                    }                 
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Nabvbar