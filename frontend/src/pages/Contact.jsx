import React from 'react'

const Contact = () => {
  
  return (
    <div className='w-[1200px] mx-auto'>
      <div className='mt-20 pb-20'>
        <h1 className='text-center text-4xl font-semibold text-orange-600'>THÔNG TIN LIÊN HỆ</h1>
        <div className='w-full flex items-center justify-between mt-20'>
          <div className='flex-1 flex flex-col gap-8 justify-center'>
            <p className='text-lg font-semibold hover:scale-110 hover:text-orange-600 cursor-pointer transition-transform duration-300'>Địa chỉ 1: 172 An Dương Vương - TP.Quy Nhơn - Bình Định</p>
            <p className='text-lg font-semibold hover:scale-110 hover:text-orange-600 cursor-pointer transition-transform duration-300'>Địa chỉ 2: 684 Hùng Vương - TP.Quy Nhơn - Bình Định</p>
            <p className='text-lg font-semibold hover:scale-110 hover:text-orange-600 cursor-pointer transition-transform duration-300'>Hotline: 1900 8009 - 035.729.6877</p>
            <p className='text-lg font-semibold hover:scale-110 hover:text-orange-600 cursor-pointer transition-transform duration-300'>Email: devtoanbug@cdktcnqn.com</p>
            <p className='text-lg font-semibold hover:scale-110 hover:text-orange-600 cursor-pointer transition-transform duration-300'>Fanpage: Trường Cao đẳng Kỹ thuật Công nghệ Quy Nhơn</p>
          </div>
          <div className='flex-1 flexjustify-center'>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.5171946394127!2d108.27658311524378!3d13.776389490314671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6bfbc6e7b4d5%3A0x9baf021c89f17c5b!2sTr%C6%B0%E1%BB%9Dng%20Cao%20%C4%91%E1%BA%B3ng%20K%E1%BB%B9%20thu%E1%BA%ADt%20C%C3%B4ng%20ngh%E1%BB%87%20Quy%20Nh%C6%A1n!5e0!3m2!1sen!2s!4v1636886786845!5m2!1sen!2s"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="border rounded-lg">           
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact