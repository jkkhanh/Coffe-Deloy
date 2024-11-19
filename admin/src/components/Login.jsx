import React, { useState } from 'react'
import bgr from '../assets/bgr_login.png'
import logo from '../assets/logocf.png'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'



const bgImage = {
  backgroundImage: `url(${bgr})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  position: 'relative'
}

const Login = ({setToken}) => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const onSubmitHanler = async (e) => {
    try {
      
      e.preventDefault()
      const response = await axios.post(backendUrl + '/api/user/admin', {email,password})
      if (response.data.success) {
        setToken(response.data.token)
      }
      else {
        toast.error(response.data.message)
      }       

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <div className=' min-h-screen flex justify-center items-center' style={bgImage}>
      <div className='w-[500px]  h-[500px] border rounded-2xl overflow-hidden shadow-2xl shadow-amber-950'>
        <div className='w-full h-full bg-slate-300 bg-opacity-45 backdrop-blur-md flex'>
          <div className='flex flex-col gap-5 items-center w-full'>
            <img src= {logo} alt='' className='w-36 mt-6 custom-shadow-color'/>
            <h1 className='text-2xl font-semibold mb-6'>CHÀO MỪNG ADMIN TRỞ LẠI</h1>
            <form onSubmit={onSubmitHanler} className='flex flex-col items-center w-full gap-5'>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type='text' placeholder='Tài khoản' className='w-[80%]  rounded-full outline-none bg-opacity-10 px-3 py-2.5' required/>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Mật khẩu' className='w-[80%]  rounded-full outline-none bg-opacity-10 px-3 py-2.5 mt-2' required/>
              <button type='submit' className='px-8 py-2 mt-8 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500'>Đăng nhập</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login