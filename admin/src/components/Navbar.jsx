import React from 'react'
import logoadm from '../assets/logocf.png'


const Navbar = ({setToken}) => {
  return (
    <div className='bg-blue-500 shadow-xl'>
      <div className='mx-auto w-[1500] px-10 py-5 flex items-center justify-between'>
        <div className='flex flex-col items-center '>
          <img src = {logoadm} alt='' className='w-28'/>
          <p className='text-xl text-white font-semibold'>Admin Coffe</p>
        </div>
        <div>
          <button onClick={() => setToken('')} className='px-5 py-2 rounded-full font-semibold bg-white '>Đăng xuất</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar