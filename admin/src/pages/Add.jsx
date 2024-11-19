import React, { useState } from 'react'
import upload from '../assets/upload.jpg'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'


const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name,setName] = useState("")
  const [description,setDescription] = useState("")
  const [price,setPrice] = useState("")
  const [category,setCategory] = useState("Coffe")

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setPrice('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
      } 
      else {
        toast.error(response.data.message)
      }  

    } catch (error) {
      console.log();
      toast.error(error.message)
    }
  }


  return (
    <div className='mb-10'>
    <h1 className='text-3xl font-semibold mb-8'>THÊM SẢN PHẨM</h1>
      <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-6'>
       
        <div className='w-full flex flex-col gap-8'>
          <div className='w-[37.5%]'>
            <p className='font-semibold text-lg mb-2'>Tên sản phẩm</p>
            <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Tên sản phẩm...' className='w-full px-3 py-2 border border-black outline-none' required />
          </div>

          <div className='w-[15%]'>
            <p className='font-semibold text-lg mb-2'>Giá sản phẩm</p>
            <input onChange={(e) => setPrice(e.target.value)} value={price} type='number' placeholder='Giá sản phẩm...' className='w-full px-3 py-2 border border-black outline-none' required />
          </div>

          <div className='w-[37.5%]'>
            <p className='font-semibold text-lg mb-2'>Loại sản phẩm</p>
            <select onChange={(e) => setCategory(e.target.value)} className='border px-4 py-2 border-black'>
              <option>Vui lòng chọn loại sản phẩm</option>
              <option value={"Coffe"}>Coffe</option>
              <option value={"Frosty"}>Frosty</option>
              <option value={"Coctail"}>Coctail</option>
            </select>
          </div>

          <div className='w-[37.5%]'>
            <p className='font-semibold text-lg mb-2'>Thông tin sản phẩm</p>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} type='text' placeholder='Thông tin sản phẩm...' className='w-full h-20 px-3 py-2 border border-black outline-none' required />
          </div>
        </div>

        <div>
          <p className='font-semibold mb-3 text-lg'>Ảnh sản phẩm</p>
          <p className='font-semibold italic text-gray-500 text-xs mb-1'>*Vui lòng tải hình ảnh sản phẩm lên</p>
          <div className='flex items-center gap-5 '>
            <label htmlFor='image1'>
              <img  src ={!image1 ? upload : URL.createObjectURL(image1)} alt='' className='w-24 h-24 overflow-hidden object-contain'/>
              <input onChange={(e) => setImage1(e.target.files[0])} type='file' id='image1' hidden />
            </label>

            <label htmlFor='image2'>
              <img  src ={!image2 ? upload : URL.createObjectURL(image2)} alt='' className='w-24 h-24 overflow-hidden object-contain'/>
              <input onChange={(e) => setImage2(e.target.files[0])} type='file' id='image2' hidden />
            </label>

            <label htmlFor='image3'>
              <img  src ={!image3 ? upload : URL.createObjectURL(image3)} alt='' className='w-24 h-24 overflow-hidden object-contain'/>
              <input onChange={(e) => setImage3(e.target.files[0])} type='file' id='image3' hidden />
            </label>

            <label htmlFor='image4'>
              <img  src ={!image4 ? upload : URL.createObjectURL(image4)} alt='' className='w-24 h-24 overflow-hidden object-contain'/>
              <input onChange={(e) => setImage4(e.target.files[0])} type='file' id='image4' hidden />
            </label>
          </div>
        </div>

        <button className='w-[36.5%] mt-7 bg-blue-500 py-2.5 text-white font-semibold'>THÊM SẢN PHẨM</button>

      </form>
    </div>
  )
}

export default Add