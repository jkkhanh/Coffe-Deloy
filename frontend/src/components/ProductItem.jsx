import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


  const formatPrice = (price) => {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

const ProductItem = ({id, image, name, price,description}) => {
    
  const [currentImage, setCurrentImage] = useState(image[0]); 
  const hasMultipleImages = image.length > 1;

  // Sử dụng useEffect để đảm bảo ảnh mặc định được reset khi sản phẩm được load lại
  useEffect(() => {
    setCurrentImage(image[0]);  // Khi sản phẩm được render lại, ảnh ban đầu sẽ được thiết lập lại
  }, [image]);

  return (
    <div className='rounded-lg group shadow-md border h-[350px] overflow-hidden'>
      <Link to={`/product/${id}`}>
        <div className='overflow-hidden w-full h-[230px] p-1  border-b'
          onMouseEnter={() => setCurrentImage(image[1])}  // Khi hover thì thay ảnh
          onMouseLeave={() => setCurrentImage(image[0])}  // Khi bỏ hover thì q
        >
          {/* <img src={currentImage} alt='' className='object-cover w-full h-full'/> */}
          {
            hasMultipleImages ? (
            // Nếu có nhiều ảnh, cho phép thay ảnh khi hover
              <>
                <img src={currentImage} alt='' className='object-cover w-full h-full transition-opacity duration-500 ease-in-out'/>
              </>
            ) : (
            // Nếu chỉ có một ảnh, hiển thị ảnh đó
              <img src={image[0]} alt='' className='object-cotain w-full h-full' />
            )
          }
        </div>
        <div className='flex flex-col p-3'>
          <p className='text-[17px] font-semibold text-orange-500 h-6'>{name}</p>
          <span className=' flex font-semibold items-center gap-2 mt-1'>Giá: <p className='font-semibold text-orange-500'>{formatPrice(price)}</p></span>
          <p className='text-xs font-semibold mt-2 line-clamp-2' title={description}>" {description} "</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductItem