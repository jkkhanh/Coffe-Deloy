import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import RelatedProduct from '../components/RelatedProduct';


const formatPrice = (price) => {
  return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};


const Product = () => {

  const {products, addToCart, quantity, setQuantity,} = useContext(ShopContext)
  const {productId} = useParams()
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId ) {
        setProductData(item)
        setImage(item.image[0])
        
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()

    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });

  },[productId,products])


  const formatDescription = (description) => {
    return description
      .split(',') // Split by commas
      .map((line, index) => <p key={index} className="font-semibold">- {line.trim()}</p>); // Add each item in a new line with formatting
  };

  return productData ? (
    <div className='w-[1400px] mx-auto '>
      <div className='flex items-center gap-3 mt-20 px-10 '>
        <div className='w-[50%]'>
          <div className='flex  w-full'>
            <img src={image} alt='' className='w-[70%]' />
          </div>
        </div>
        <div className='w-[50%]'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-semibold text-2xl text-orange-500'>CHI TIẾT SẢN PHẨM</h1>
            <p className='mt-5 font-semibold'>Tên sản phẩm: {productData.name}</p>
            <p className='font-semibold'>Giá: {formatPrice(productData.price)}</p>
            <p className='font-semibold'> {productData.category === 'Coctail' ? formatDescription(productData.description) : <p>{productData.description}</p>}</p>
            <div className='flex items-center gap-6 mt-5'>
              <input type='number'  min={1} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className=' w-16 py-3 text-center border text-xl outline-none' />
              <button onClick={() => addToCart(productData._id)} className='px-10 py-3 bg-blue-500 font-semibold text-white'>THÊM VÀO GIỎ HÀNG</button>
            </div>
            <hr />
            <p className='text-sm text-gray-500 italic'>- An toàn vệ sinh</p>
            <p className='text-sm text-gray-500 italic'>- Chất lượng đảm bảo</p>
            <p className='text-sm text-gray-500 italic'>- Người đăng: Nguyễn Lê Khánh</p>
          </div>
        </div>
      </div>
      <hr  className='mt-10'/>

      <RelatedProduct category={productData.category} />
    </div> 
  ) : <div className='opacity-0'></div>
}

export default Product