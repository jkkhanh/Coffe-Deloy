import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'


export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const ship = 15000;
    const [cartItems, setCartItems] = useState([])
    const [quantity, setQuantity] = useState(0);
    const [products, setProducts] = useState([])
    const [token,setToken] = useState('')
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    

    // thêm vào giỏ hàng từ button "Thêm vào giỏ hàng"
    const addToCart = async (itemId) => {
        if (!quantity) {
            toast.error("Vui lòng thêm số lượng")
            return null;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
           cartData[itemId] += quantity;
        }
        else {

            cartData[itemId] = quantity;
        }
        setCartItems(cartData)
        toast.success("Đã thêm sản phẩm vào giỏ hàng")
        setQuantity(0)

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add',{itemId,quantity}, {headers:{token}})
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        }
    }

    // lấy số lượng giỏ hàng đã thêm
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            try {
                if (cartItems[itemId] > 0) {
                    totalCount += cartItems[itemId]
                }
            } catch (error) {
                
            }
        }
        return totalCount;
    }


    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId] = quantity;
        setCartItems(cartData)
        
        if (token) {           
            try {
                await axios.post(backendUrl + '/api/cart/update', {itemId, quantity}, {headers:{token}})
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        }
    }


    const getCartAmount = () => {
        let totalAmount = 0;
        for( const itemId in cartItems){
            let itemInfo = products.find((product) => product._id === itemId)
            try {
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[itemId]
                }
            } catch (error) {
                
            }
        }
        return totalAmount;
    }


    const getProductsData = async () => {
        try {
            
            const response = await axios.get(backendUrl + '/api/product/list')
            if(response.data.success){
                setProducts(response.data.products)
            }
            else {
                toast.error(response.data.message)
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    const getUserCart = async (token) => {
        try {
            
            const response = await axios.post(backendUrl + '/api/cart/get', {}, {headers:{token}})
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    useEffect(() => {
        getProductsData()
    },[])


    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    },[])


    useEffect(() => {
        if (token) {
            getUserCart(token); // Lấy giỏ hàng ngay khi token có giá trị
        }
    }, [token]);
    


    const value = {
        products,
        ship,
        quantity,setQuantity,
        setCartItems,
        cartItems,addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        backendUrl,
        token, setToken
    }


    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;
