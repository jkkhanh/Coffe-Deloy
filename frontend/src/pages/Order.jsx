import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';


const formatPrice = (price) => {
  return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const Order = () => {

  const {products, backendUrl, token} = useContext(ShopContext)

  const [orderData, setOrderData] = useState([])
  
  const loadOrderData = async () => {
    try {

      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, {headers:{token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())        
      }      

    } catch (error) {
      
    }
  }


  useEffect(() => {
    loadOrderData()
  },[token])


  const formatVietnameseDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day} tháng ${month} năm ${year}`; 
  };

  return (
    <div className='w-[1500px] mx-auto'>
      <div className='border-t pt-12 px-10'>
        <h1 className='text-2xl font-semibold text-orange-500'>ĐƠN HÀNG CỦA TÔI</h1>
        <div className='mt-10'>
          {
            orderData.map((item,index) => (
              <div key={index} className='py-4 border-t border-b flex justify-between gap-4'>
                <div className='w-1/2 flex items-start gap-6 text-sm'>
                  <div className='flex items-center gap-5'>
                    <img src={item.image[0]} alt='' className='w-20'/>
                    <div>
                      <p className='text-sm font-semibold text-yellow-600'>{item.name}</p>
                      <p className='mt-1'>Giá: <span className='ml-1 font-semibold'>{formatPrice(item.price)}</span></p> 
                      <p className='mt-1'>Số lượng: <span className='font-semibold ml-1'>{item.quantity}</span></p>
                      <p className='mt-1'>Ngày đặt: <span className='italic text-gray-400 font-semibold ml-1 '>{formatVietnameseDate(item.date)}</span></p>
                      {/* Có thể thay theo giờ nước ngoài là {new Date(item.date).toDateString()} */}
                      <p className='mt-1'>Thanh toán: <span className='ml-1 text-orange-500 font-semibold'>{item.paymentMethod}</span> </p>
                    </div>
                  </div>
                </div>
                <div className='md:w-1/2 flex justify-between items-center'>
                  <div className='flex items-center gap-3'>
                    <p className='min-w-2 h-2 rounded-full bg-green-400'></p>
                    <p className='text-sm font-semibold'>{item.status}</p>
                  </div>
                  <button onClick={loadOrderData} className='bg-blue-500 min-h-10 px-5 text-white font-semibold '>Tiến trình hàng</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Order