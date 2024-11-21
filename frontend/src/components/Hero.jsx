import React from 'react'
import coffe from '../assets/cf2.png'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  
  return (
    <div className=' min-h-[600px] bg-yellow-700 flex items-center'>
      <div className='w-[1500px] px-3 flex mx-auto'>
        <div className='flex w-1/2  flex-col gap-5 justify-center'>
          <p className='font-cursive text-white text-3xl'>
          <TypeAnimation
              sequence={[
                'Một ly coffe có thể giúp bạn tỉnh táo tinh thần vào những buổi mất ngủ.', // Chuỗi 1
                2000, // Dừng lại 2 giây
              ]}
              speed={50} // Tốc độ gõ
              wrapper="span" // Kiểu bao bọc (span/p/div)
              repeat={0}
              cursor={true} // Chạy một lần
            />
          </p>
          <p className='font-cursive text-white text-xl mt-3' > <TypeAnimation
              sequence={[
                   'Có coffe mọi chuyện đều trở nên dễ dàng', // Chuỗi 1
                2000, // Dừng lại 2 giây
              ]}
              speed={50} // Tốc độ gõ
              wrapper="span" // Kiểu bao bọc (span/p/div)
              repeat={0} // Chạy một lần
            /></p>
          <Link to = '/menu' className='w-64' data-aos="zoom-in" data-aos-duration="1000">
            <button class="relative mt-6 group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
              <span class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>
              <span class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"></span>
              <div class="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-orange-700 bg-orange-600 to-yellow-600 gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
                <span class="select-none">Xem thực đơn</span>
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1">
                  <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd"></path>
                </svg>
              </div>
            </button>
          </Link>


        </div>
        <div className='flex w-1/2 items-center justify-center relative '>
          <div data-aos = 'fade-left' data-aos-duration="1000">
            <img src= {coffe} alt='' className='w-96 spin relative' />
          </div>
          <div className='group'>
            <button className=' absolute z-10 px-5 py-2 top-14 left-28 bg-blue-400 opacity-80 text-white rounded-full text-lg border-2  border-white ' data-aos = 'fade-up-right' data-aos-duration="1000" >Code với Coffe</button>
            <div className='absolute -top-6 left-28 rounded-lg text-sm bg-white w-40 px-4 py-1 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 tooltip'>Code ngay với 1 ly coffe, bạn có thể tỉnh táo</div>
          </div>
          <div className='group'>
            <button className=' absolute px-5 py-2 bottom-10 right-10 bg-blue-400 opacity-80 text-white rounded-full text-lg border-2 border-white' data-aos = 'fade-up-left' data-aos-duration="1000">Thái độ hơn trình độ</button>
            <div>
              <div className='absolute top-[150px] right-12 rounded-lg text-sm bg-white w-48 px-4 py-1 translate-y-10  opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 tooltip'>Trình độ có thể đào tạo nhưng thái độ thì không, khiêm tốn chưa bao giờ là thừa. Thái độ tốt bạn sẽ được đền đáp xứng đáng</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero