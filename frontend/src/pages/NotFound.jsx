import React from 'react'
import gs1 from '../assets/gs1.png'
import gs2 from '../assets/gs2.png'
import gs3 from '../assets/gs3.png'
import { Link } from 'react-router-dom';


const links = [
    {
      name: "Trang chủ",
      href: "/",
      description: "Quay về trang chủ",
      img: gs1,
    },
    {
      name: "Thực đơn",
      href: "/menu",
      description: "Xem thực đơn có gì?",
      img: gs2,
    },
    {
      name: "Về chúng tôi",
      href: "/about",
      description: "Thông tin về chúng tôi",
      img: gs3
    },
  ];

const NotFound = () => {
  return (
    <div className='w-full h-[100vh] flex items-center'>
        <div className='mx-auto'>
            <h1 className='text-[80px] text-blue-500 font-semibold text-center'>404</h1>
            <p className='mb-8 font-semibold text-center italic'>Xin lỗi, đường dẫn này không tồn tại, vui lòng kiểm tra lại.</p>
            <div className='p-6 flex flex-col gap-6'>
                {
                    links.map((item,index) =>(
                        <div key={index} className='border rounded-lg py-2 px-2 hover:scale-110 hover:bg-blue-300 transition-all duration-500'>
                            <Link to = {item.href} >
                                <div className='flex items-center gap-8'>
                                    <img src={item.img} alt='' className='w-20'/>
                                    <div className='flex flex-col'>
                                        <p className='font-semibold text-blue-500'>{item.name}</p>
                                        <p className='font-semibold text-gray-500 italic'>{item.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default NotFound