import React, { useContext, useState } from 'react'
import CartTotal from '../components/CartTotal'
import momo from '../assets/momo.jpg'
import vnpay from '../assets/vnpay.jpg'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod')
    const navigate = useNavigate()
    const {backendUrl, token, cartItems, setCartItems, getCartAmount, ship, products} = useContext(ShopContext)

    const [formData, setFormData] = useState({
        fullName: '',
        addressDelivery: '',
        phone: '',
        message: ''
    })
    
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({...data,[name]: value}))

    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            let orderItems = []
            for (const itemId in cartItems){
                if (cartItems[itemId] > 0) {
                    const itemInfo = structuredClone(products.find(product => product._id === itemId));
                    if (itemInfo) {
                        // Thêm số lượng vào thông tin sản phẩm
                        itemInfo.quantity = cartItems[itemId];
                        // Thêm sản phẩm này vào danh sách đơn hàng
                        orderItems.push(itemInfo);
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + ship 
            }

            switch(method){
                //Api calls for COD
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers:{token}})
                    // console.log(response.data);
                    
                    if (response.data.success) {
                        setCartItems({})
                        toast.success(response.data.message)
                        navigate('/orders')
                    }
                    else {
                        toast.error(response.data.message)
                    }
                    break;
                default:
                    break;
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='w-[1500px] mx-auto'>
            <div className='flex justify-between gap-4 pt-5 min-h-[80vh] px-10'>
                <div className='w-[50%] flex flex-col mt-20'>
                    <h1 className='font-semibold text-xl'>THÔNG TIN GIAO HÀNG</h1>
                    <div className=' mt-8 flex flex-col gap-3'>
                        <input onChange={onChangeHandler} name='fullName' value={formData.fullName} type='text' placeholder='Họ và tên'  className='outline-none w-[60%] border h-10 px-5' required/>
                        <input onChange={onChangeHandler} name='addressDelivery' value={formData.addressDelivery} type='text' placeholder='Địa chỉ'  className='outline-none w-[60%] border h-10 px-5'  required/>
                        <input onChange={onChangeHandler} name='phone' value={formData.phone} type='number' placeholder='Số điện thoại'  className='outline-none w-[60%] border h-10 px-5' required/>
                        <textarea onChange={onChangeHandler} name='message' value={formData.message}  placeholder='Lời nhắn...' className='outline-none w-[60%] border h-20 px-5' />
                    </div>
                </div>
                <div className='w-[50%] flex flex-col mt-20'>
                    <div className='mx-auto'>
                        <CartTotal />
                        <h1 className='mt-8 font-semibold text-xl'>Phương thức thanh toán</h1>
                        <div className='flex mt-3 gap-3 ml-3'>
                            <div onClick={() => setMethod('cod')} className='border w-28 h-10 flex gap-3 items-center justify-center cursor-pointer'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400 border-2 border-blue-500' : ''}`}></p>
                                <p className='font-semibold'>COD</p>
                            </div>
                            <div
                                onClick={() => setMethod('momo')}
                                className='border w-28 h-10 flex gap-3 items-center justify-center cursor-pointer'
                            >
                                <p
                                    className={`min-w-3.5 h-3.5 border rounded-full ${
                                        method === 'momo' ? 'bg-green-400 border-2 border-blue-500' : ''
                                    }`}
                                ></p>
                                <img src={momo} />
                            </div>

                            <div  onClick={() => setMethod('vnpay')}  className='border w-28 h-10 flex gap-3 items-center justify-center cursor-pointer'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'vnpay' ? 'bg-green-400 border-2 border-blue-500' : ''}`}></p>
                                <img src={vnpay} />
                            </div>
                        </div>
                        <div className='mt-10 flex justify-center w-full'>
                            <button type='submit'  className='bg-blue-500 text-white font-semibold w-full py-3'> THANH TOÁN </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
