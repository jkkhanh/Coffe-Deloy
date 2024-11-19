import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShopContext } from './../context/ShopContext';
import axios from 'axios';


const Login = () => {

  const [isLogin, setIsLogin] = useState(true); // Điều khiển giữa đăng nhập và đăng ký
  const {token, setToken, backendUrl, getUserCart} = useContext(ShopContext)
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email,setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      
      if ( !isLogin ) {
        const response = await axios.post(backendUrl + '/api/user/register', {name, email, password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success(`Đăng kí thành công, chúc mừng ngài ${name}`)
        }
        else {
          toast.error(response.data.message)
        }
        
      }
      else {
        const response = await axios.post(backendUrl + '/api/user/login', {email, password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success(`Chào mừng ngài quay lại`)
        }
        else {
          toast.error(response.data.message)
        }

      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }


  useEffect(() => {
    if (token){
      navigate('/')
    }
  },[token])
  

  return (
    <form onSubmit={onSubmitHandler}  className="flex items-center justify-center min-h-screen w-full ">
      <div className="w-[60%] h-[80vh] border shadow-2xl flex bg-white rounded-lg overflow-hidden">
        {/* Panel bên trái: Form đăng nhập và đăng ký */}
        <div className={`w-1/2 transition-all duration-500 ease-in-out ${isLogin ? 'transform translate-x-[100%]' : 'transform translate-x-0'}`}>
          <div className="h-full flex flex-col justify-center items-center p-5">
            <h1 className="font-semibold text-4xl text-center mb-10">
              {isLogin ? 'ĐĂNG NHẬP' : 'ĐĂNG KÍ'}
            </h1>
            <div className="w-full flex flex-col items-center gap-3">
              {isLogin ? (
                <>
                  <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="w-full h-12 border px-4 outline-none rounded-md" required/>
                  <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Mật khẩu" className="w-full h-12 border px-4 outline-none rounded-md" required/>
                  <p className='ml-auto'>
                    {
                      isLogin ? 'Bạn quên mật khẩu ?' : ''
                    }
                  </p>
                  <button type='submit'   className="w-full py-3 bg-blue-500 text-white rounded-full mt-5"> Đăng nhập </button>
                </>
              ) : (
                <>
                  <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Họ và tên của bạn" className="w-full h-12 border px-4 outline-none rounded-md" required/>
                  <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="w-full h-12 border px-4 outline-none rounded-md" required/>
                  <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Mật khẩu" className="w-full h-12 border px-4 outline-none rounded-md" required/>
                  <button type='submit'  className="w-full py-3 bg-green-500 text-white rounded-full mt-5"> Đăng ký </button>
                </>
              )}
            </div>
            
          </div>
        </div>

        <div className={`w-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col justify-center items-center text-white rounded-r-lg transition-all duration-500 ease-in-out ${isLogin ? 'transform translate-x-[-100%]' : 'transform translate-x-0'}`} >
          <h2 className="text-4xl font-semibold px-5">
            {isLogin ? 'Chào bạn trở lại!' : 'Chào mừng bạn đến với Coffee Home'}
          </h2>
          <p className="mt-4 text-center text-lg px-5">
            {isLogin ? 'Hãy đăng nhập để tiếp tục với những trải nghiệm tuyệt vời của chúng tôi.' : 'Đăng ký ngay để không bỏ lỡ các ưu đãi hấp dẫn!'}
          </p>
          <button className='px-5 py-2 mt-8 rounded-full border-2 border-white hover:scale-110 transition-transform duration-300' onClick={() => {setIsLogin(!isLogin); setName(''); setEmail(''); setPassword('')}}>
            {
              isLogin ? 'Đăng kí' : 'Đăng nhập'
            }
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
