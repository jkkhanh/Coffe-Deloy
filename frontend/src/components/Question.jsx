import React from 'react'
import nguyenchat from '../assets/nguyenchat.png'
import phache from '../assets/phache.png'
import khongian from '../assets/khongian.png'

const Question = () => {
  return (
    <div className='w-[1500px] mx-auto mt-20 mb-5'>
        <h2 className='text-center font-semibold text-4xl text-orange-500' data-aos = 'zoom-in'>Vì sao nên chọn Coffe Home</h2>
        <div className='flex justify-center w-[520px] mx-auto mt-3'data-aos = 'zoom-out'>
            <p className='font-semibold text-[15px] text-gray-500'>" Không những mang đến sự tuyệt vời thông qua các thức uống bí mật
            mà hơn thế nữa là cảm giác bạn tận hưởng được chỉ khi đến với Coffe Home "</p>
        </div>
        <div className='grid grid-cols-3 gap-5 px-32 mt-10'>
            <div className='flex flex-col items-center justify-center gap-3' data-aos = 'fade-right' data-aos-duration = '1000'>
                <img src = {nguyenchat} alt=''/>
                <h1 className='font-semibold text-xl'>COFFE NGUYÊN CHẤT</h1>
                <p className='text-gray-500 font-semibold px-11'>Hạt cà phê được thu hoạch và rang xay theo quy trình khép kín đúng công thức đặc biệt đảm bảo tính nguyên chất.</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-3' data-aos = 'fade-up' data-aos-duration = '1000'>
                <img src = {phache} alt=''/>
                <h1 className='font-semibold text-xl'>PHA CHẾ ĐỘC ĐÁO</h1>
                <p className='text-gray-500 font-semibold px-11'>Bí kíp tạo nên sự độc là trong từng thức uống đó chính là phương pháp pha chế độc đáo của Home Coffe.</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-3' data-aos = 'fade-left' data-aos-duration = '1000'>
                <img src = {khongian} alt=''/>
                <h1 className='font-semibold text-xl'>KHÔNG GIAN ĐỘC ĐÁO
                </h1>
                <p className='text-gray-500 font-semibold px-11'>Được thiết kế theo lối không gian mở vừa hiện đại nhưng không mất phần tao nhã, lịch sự của một quán Cà phê.</p>
            </div>
        </div>
    </div>
  )
}

export default Question