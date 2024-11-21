import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'



const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };


const CartTotal = () => {

    const {ship, getCartAmount, cartItems} = useContext(ShopContext)
    const cartData = Object.values(cartItems).filter(quantity => quantity > 0); // Tính số sản phẩm trong giỏ hàng (cartData)
    

  return (
    <div className='w-[500px]'>
        <h1 className='font-semibold text-2xl text-blue-500'>HÓA ĐƠN</h1>
        <div className='flex flex-col gap-2 mt-6 text-sm'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold'>Tổng tiền hàng</p>
                <p>{formatPrice(getCartAmount())}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p className='font-semibold'>Tiền ship:</p>
                <p>{cartData.length > 0 ? formatPrice(ship) : '0đ'}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p className='font-semibold'>Tổng cộng: </p>
                <p>{formatPrice(getCartAmount() === 0 ? 0 : getCartAmount() + ship)}</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal