import React, { useContext } from 'react'
import discover from '../assets/discover.jpg'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'



const bgDis = {
    backgroundImage: `url(${discover})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
 
  }

const DiscoverMenu = () => {

    const {products} = useContext(ShopContext)

  return (
    <div style={bgDis} className='w-full h-[700px] mt-5'>
        <div className='w-[1200px] mx-auto py-4'>
            <p className='text-center font-semibold text-orange-500 text-3xl mt-10' data-aos = 'fade-down'>KHÁM PHÁ MENU</p>
            <p className='text-center mt-5  font-semibold text-white' data-aos = 'zoom-in'>Có gì đặc biệt ở đây</p>
            <div className='w-full h-full grid grid-cols-2 px-3 py-1 gap-10 mt-20'>
                {
                    products.slice(0,6).map((item,index) => (
                        <div key={index} className='flex items-center px-2 space-x-3' data-aos = 'fade-right' data-aos-duration = '1000'>   
                            <div>
                               <Link to = {`/product/${item._id}`}><img src = {item.image} alt='' className='w-28 object-contain'/></Link>
                            </div>   
                            <div className='flex flex-col w-full'>
                                <div className='flex w-full justify-between items-center'>
                                   <Link to={`/product/${item._id}`}> <p className='text-xl font-semibold text-orange-500'>{item.name}</p></Link>
                                    <p className='text-xl font-semibold text-orange-500'>{item.price}</p>
                                </div>
                                <div className="border-t-[3px] border-dashed border-white mt-1"></div>      
                                <p className='text-base text-white font-semibold mt-1'>{item.description}</p>
                            </div>
                              
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center mt-10'>
                <Link to = '/menu'><button className='bg-black bg-opacity-55 px-5 py-2 border-2 border-white rounded-full text-lg text-white hover:scale-110 transition-all duration-500' data-aos = 'zoom-out'>Xem thêm menu</button></Link>
            </div>
        </div>
    </div>
  )
}

export default DiscoverMenu