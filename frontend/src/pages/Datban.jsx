import React from 'react'

const Datban = () => {
  return (
    <div className='w-[1200px] mx-auto'>
      <div className='px-20 py-10'>
        <h1 className='text-center font-semibold text-4xl text-orange-600'>ĐẶT BÀN</h1>
        <div className='mt-20 flex items-stretch'>
          <div className='w-[30%] bg-orange-800 flex-grow'>
            <div className='p-6'>
              <div className='w-full p-5 flex flex-col items-center justify-center border text-white'>          
                  <p className='font-semibold text-lg'>Giờ mở cửa </p>
                  <p className='font-semibold mt-3'>Thứ 2 - thứ 6 hàng tuần</p> 
                  <p>7h sáng - 11h sáng</p>      
                  <p>11h sáng - 10h tối</p>  
                  <p className='font-semibold mt-3'>Thứ 7, chủ nhật hàng tuần</p>  
                  <p>8h sáng - 1h chiều</p>
                  <p>1h chiều - 9h tối</p> 
                  <div className="border-t-[3px] border-dashed border-white mt-3 w-full"></div>
                  <p className='font-semibold text-lg mt-2'>Số điện thoại</p>
                  <p className='font-semibold text-lg mt-1'>1900 8098</p>
              </div>
            </div>
          </div>
          <div className='w-[70%] bg-blue-500 flex-grow'>
            <div className='p-6'>
              <div className='w-full flex flex-col gap-3 items-center'>
                <p className='text-center font-semibold text-xl mb-5 mt-5'>THÔNG TIN ĐẶT BÀN</p>
                <div className='flex items-center justify-between w-full gap-10'>
                  <input type='text' placeholder='Họ và tên khách hàng' className='w-1/2 h-10 outline-none px-2'/>
                  <input type='text' placeholder='Địa chỉ gmail' className='w-1/2 h-10 outline-none px-2'/>
                </div>

                <div className='flex items-center justify-between w-full gap-10'>
                  <input type='number' placeholder='Số điện thoại khách hàng' className='w-1/2 h-10 outline-none px-2'/>
                  <select className='w-1/2 h-10 outline-none px-2'>
                    <option>Chọn số người</option>
                    <option>5 người</option>
                    <option>10 người</option>
                    <option>15 người</option>
                    <option>20 người</option>
                    <option>25 người</option>
                    <option>30 người</option>
                  </select>
                </div>

                <div className='flex items-center justify-between w-full gap-10'>
                  <input type='date' placeholder='Chọn ngày' className='w-1/2 h-10 outline-none px-2'/>
                  <input type='time' placeholder='Chọn giờ' className='w-1/2 h-10 outline-none px-2'/>
                </div>

                <button className='mt-5 px-10 py-2 bg-white font-semibold border-2 rounded-full hover:bg-orange-400 hover:text-white'>ĐẶT BÀN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Datban