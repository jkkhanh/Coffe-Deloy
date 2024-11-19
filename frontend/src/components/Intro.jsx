import React from 'react'
import intro1 from '../assets/intro1.jpeg'
import intro2 from '../assets/intro2.jpg'
import intro3 from '../assets/intro3.png'


const Intro = () => {
  return (
    <div className='mt-6 mx-auto w-[1200px] px-3 py-2 flex gap-4 h-[500px]'>
        <div className='w-[50%] h-full overflow-hidden relative'>
            <img src={intro1} alt='' className='w-full h-full object-cover'/>
            <div className='absolute inset-0 bg-black bg-opacity-50'>
                <div className='absolute inset-0 flex justify-start items-center '>
                    <div className='px-10 group ' data-aos = 'fade-up'>
                        <p className='mb-4 font-semibold text-white opacity-90 text-4xl group-hover:-translate-y-5 transition-transform duration-500'>
                            Coffe hương vị mới
                        </p>
                        <button className='bg-transparent border px-10 py-3 text-white font-semibold text-lg group-hover:-translate-y-5 transition-transform duration-500 hover:bg-white hover:text-black'>
                            Tìm hiểu thêm
                        </button>
                    </div>
                </div>
            </div>       
        </div>
        
        <div className='w-[50%] h-full overflow-hidden'>
            <div className='flex flex-col gap-3 h-full'>
                <div className='w-full h-1/2 relative'>
                    <img src={intro2} alt='' className='w-full h-full object-cover' />
                    <div className='absolute inset-0 bg-black bg-opacity-50'>
                        <div className='absolute inset-0 flex justify-start items-center '>
                            <div className='px-10 group' data-aos = 'fade-up'>
                                <p className='mb-4 font-semibold text-white opacity-90 text-2xl group-hover:-translate-y-5 transition-transform duration-500'>
                                    Không gian độc đáo
                                </p>
                                <button className='bg-transparent border px-8 py-2 text-white font-semibold group-hover:-translate-y-5 transition-transform duration-500 hover:bg-white hover:text-black'>
                                    Tìm hiểu thêm
                                </button>
                            </div>
                        </div>
                    </div>       
                </div>

                <div className='w-full h-1/2 relative'>
                    <img src={intro3} alt='' className='w-full h-full object-cover' />
                    <div className='absolute inset-0 bg-black bg-opacity-50'>
                        <div className='absolute inset-0 flex justify-start items-center '>
                            <div className='px-10 group' data-aos = 'fade-up'>
                                <p className='mb-4 font-semibold text-white opacity-90 text-2xl group-hover:-translate-y-5 transition-transform duration-500'>
                                    Pha chế chuyên nghiệp
                                </p>
                                <button className='bg-transparent border px-8 py-2 text-white font-semibold group-hover:-translate-y-5 transition-transform duration-500 hover:bg-white hover:text-black'>
                                    Tìm hiểu thêm
                                </button>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro