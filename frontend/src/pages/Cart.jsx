import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FaTrashCan } from "react-icons/fa6";
import CartTotal from '../components/CartTotal';
import { useNavigate } from 'react-router-dom';


const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };


const Cart = () => {

    const navigate = useNavigate()
    const {products, ship, cartItems, updateQuantity} = useContext(ShopContext)
    const [cartData, setCartData] = useState([])
    console.log(cartData);

    useEffect(() => {
        
        if (products.length > 0) {
            const tempData = [];
            for (const itemId in cartItems){
                const quantity = cartItems[itemId]

                if (quantity > 0){
                    tempData.push({
                        _id: itemId,
                        quantity: quantity
                    })
                }
            }
        setCartData(tempData);
        }
           
    },[cartItems,products])

    
    
    

  return (
    <div className='w-[1500px] mx-auto'>
        <div className='border-t pt-14'>
            <div className='text-2xl mb-3'>
                <h1>GIỎ HÀNG CỦA BẠN</h1>
            </div>
            <div>
                {
                    cartData.map((item,index) => {
                        const productData = products.find((product) => product._id === item._id )
                        return (
                            <div key={index} className='py-4 border-t border-b grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                                <div className='flex items-center gap-6'>
                                    <img src = {productData.image[0]} alt='' className='w-20'/>
                                    <div>
                                        <p className='text-sm font-semibold'>{productData.name}</p>
                                        <div className='flex items-center gap-5 mt-2'>
                                            <p>{formatPrice(productData.price)}</p>
                                        </div>
                                    </div>
                                </div>
                                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,Number(e.target.value))} type='number' min = {1} defaultValue={item.quantity} className='border outline-none w-14 h-8 text-center'/>
                                <FaTrashCan onClick={() => updateQuantity(item._id,0)}  className='text-xl hover:text-blue-500 cursor-pointer'/>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-end  my-20 px-5'>
                <div>
                    <CartTotal />
                    <div className='flex justify-end'>
                        {
                            cartData.length > 0 ? (
                                <button onClick={() => navigate('/place-order')} className='w-[50%] bg-blue-500 py-3 mt-8 text-white'>Thực hiện thanh toán</button>
                            ) : (
                                <button disabled className='w-[50%] bg-blue-500 py-3 mt-8 text-white cursor-not-allowed opacity-60'>Không thể thanh toán</button> 
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart