import React from 'react'
import fb from '../assets/facebook-icon.png'
import ins from '../assets/instagram-icon.png'
import tiktok from '../assets/tiktok-icon.jpg'
import zalo from '../assets/zalo-icon.png'


const Fotter = () => {
  return (
    <div className='bg-yellow-900 mt-20'>
      <div className='w-[1500px] mx-auto px-36 pt-8 pb-3'>
        <div className='grid grid-cols-[1.5fr_2fr_1fr]'>
          <div className='flex flex-col space-y-3'>
            <h1 className='text-2xl font-semibold text-orange-500'>KẾT NỐI VỚI CHÚNG TÔI</h1>
            <p className='ml-1 text-white font-semibold'>Chúng tôi mong muốn tạo nên hương vị thức uống tuyệt vời nhất. Là điểm đến đầu tiên dành cho bạn khi muốn thưởng thức trọn vẹn của tách Coffee</p>
            <div className='flex items-center gap-3'>
              <img src = {fb} alt='' className='w-12 hover:scale-110 transition-transform duration-300' title='Liên hệ qua Facebook'/>
              <img src = {ins} alt='' className='w-12 hover:scale-110 transition-transform duration-300' title='Liên hệ qua Instagram'/>
              <img src = {tiktok} alt='' className='w-12 hover:scale-110 transition-transform duration-300' title='Theo dõi qua kênh Tiktok'/>
              <img src = {zalo} alt='' className='w-12 hover:scale-110 transition-transform duration-300' title='Liên hệ qua Zalo'/>
            </div>
          </div>

          <div className='flex flex-col space-y-3 ml-20'>
            <h1 className='text-2xl font-semibold text-orange-500'>LIÊN HỆ</h1>
            <ul className='flex flex-col gap-2'>
              <li className='text-white font-semibold'>- Địa chỉ: 172 An Dương Vương - TP.Quy Nhơn - Bình Định</li>
              <li className='text-white font-semibold'>- Địa chỉ: 684 Hùng Vương - TP.Quy Nhơn - Bình Định</li>
              <li className='text-white font-semibold'>- Số điện thoại: 1800 8009</li>
              <li className='text-white font-semibold'>- Email: devtoanbug@cdktcnqn.com</li>
            </ul>
          </div>

          <div className='flex flex-col space-y-3 ml-20'>
            <h1 className='text-2xl font-semibold text-orange-500'>CHÍNH SÁCH</h1>
            <ul className='flex flex-col gap-2 ml-1'>
              <li className='text-white font-semibold'>Trang chủ</li>
              
              <li className='text-white font-semibold'>Thực đơn</li>
              <li className='text-white font-semibold'>Giới thiệu</li>
              <li className='text-white font-semibold'>Tin tức</li>
              <li className='text-white font-semibold'>Liên hệ</li>
              <li className='text-white font-semibold'>Đặt bàn</li>
            </ul>
          </div>
        </div>
        <hr  className='mt-10 bg-gray-500'/>
        <h1 className='text-center font-semibold text-lg text-white mt-2'>Copyright by Devtoanbug</h1>
        <p className='text-center font-semibold'>@2024</p>
      </div>
    </div>
  )
}

export default Fotter