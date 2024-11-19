import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const RelatedProduct = ({category}) => {

    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(() => {
        if(products.length > 0) {
            let productRela = products.slice();
            productRela = productRela.filter((item) => category === item.category)

            setRelated(productRela.slice(0,5))
        }
    },[products])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <p className='text-blue-600 font-semibold'>SẢN PHẨM LIÊN QUAN </p>
        </div>
        <div className='grid grid-cols-5 justify-items-center gap-10 mt-10' data-aos = 'fade-up' data-aos-duration = '1000'>
            {
                related.map((item,index) => (
                    <div className='hover:-translate-y-3 transition-transform duration-300 '>
                        <ProductItem key={index} id = {item._id} image = {item.image} name = {item.name} price = {item.price} description = {item.description} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProduct