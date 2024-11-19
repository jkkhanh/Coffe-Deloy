import React from 'react'
import {NavLink} from 'react-router-dom'
import addProduct from '../assets/add_product_cart.png'
import listProduct from '../assets/list-icon.png'
import orderProduct from '../assets/order-icom.png'
import avt from '../assets/z5988519631901_7c78a04e6454acb64722b403a071c5fc.jpg'


const SideBar = () => {
  return (
    <div className='bg-blue-500 w-[20%] min-h-screen shadow-lg'>
        <div className='w-16 overflow-hidden mx-auto rounded-full mt-10'>
            <img src = {avt} alt='' className='object-contain' />
        </div>
        <p className='text-center mt-3 font-semibold text-white'>Admin Coffe</p>
        <div className='flex flex-col gap-5 pt-6 pl-[15%] '>
            <NavLink to = '/add' className='flex items-center bg-white gap-3 border border-r-0 px-3 py-3'>
                <img src={addProduct} alt='' className='w-12 h-12'/>
                <p className='font-semibold'>Thêm sản phẩm</p>
            </NavLink>

            <NavLink to = '/list' className='flex items-center bg-white gap-3 border border-r-0 px-3 py-3'>
                <img src={listProduct} alt='' className='w-12 h-12'/>
                <p className='font-semibold'>Danh sách sản phẩm</p>
            </NavLink>

            <NavLink to = '/orders' className='flex items-center bg-white gap-3 border border-r-0 px-3 py-3'>
                <img src={orderProduct} alt='' className='w-12 h-12'/>
                <p className='font-semibold'>Đơn hàng</p>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar