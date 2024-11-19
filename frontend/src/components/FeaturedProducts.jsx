import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { ShopContext } from '../context/ShopContext'

const FeaturedProducts = () => {

    const {products} = useContext(ShopContext)

  return (
    <div className='w-[1200px] mx-auto mt-10 mb-10'>
        <h2 className='text-center text-3xl font-semibold text-orange-500' data-aos = 'fade-right'>COFFE LÀ HƯƠNG VỊ CỦA BẠN</h2>
        <p className='font-semibold text-orange-300 text-center my-3'data-aos = 'fade-left'>(Hãy thưởng thức một cách trọn vẹn hương vị này)</p>
        <div className='grid grid-cols-5 gap-4 mt-10' data-aos = 'fade-up'>
            {
                products.slice(0,5).map((item,index) => (
                    <div key = {index}  data-aos='fade-up' data-aos-delay={`${index * 400}`}>
                        <div className=' hover:-translate-y-4 transition-transform duration-500 hover:shadow-2xl hover:rounded-lg'>
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} description={item.description}  />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FeaturedProducts