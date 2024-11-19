import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import remove from '../assets/remove-icon.png'


const formatPrice = (price) => {
  return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};


const List = ({token}) => {

  const [list,setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      // console.log(response.data);
      
      if (response.data.success){
        setList(response.data.products);
      }
      else {
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.success(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      
      const response = await axios.post(backendUrl + '/api/product/remove',{id}, {headers:{token}})
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      }
      else {
        toast.error(response.data.message)
      }

    } catch (error) {

      console.log(error);
      toast.success(error.message)

    }
  }

  useEffect(() => {
    fetchList()
  },[])

  return (
    <div className='pr-14'>
      <p className=' mt-8 text-2xl font-semibold mb-3'>DANH SÁCH SẢN PHẨM</p>
      <div className='flex flex-col gap-2 mt-6'>
        <div className='bg-blue-500 px-2 py-2 text-white grid grid-cols-[1.2fr_2fr_2fr_1fr_0.5fr]'>
          <b>Hình ảnh</b>
          <b>Tên sản phẩm</b>
          <b>Loại sản phẩm</b>
          <b>Price</b>
          <b>Xóa</b>
        </div>

        {
          list.map((item,index) => (
            <div key={index} className='grid items-center grid-cols-[1.2fr_2fr_1.6fr_1fr_0.5fr] border'>
               <img src = {item.image[0]} alt='' className='w-20'/> 
               <p className='text-amber-600 font-semibold'>{item.name}</p>
               <p>{item.category}</p>
               <p>{formatPrice(item.price)}</p>
               <img onClick={() => removeProduct(item._id)} src = {remove} alt='' className='w-7'/>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default List