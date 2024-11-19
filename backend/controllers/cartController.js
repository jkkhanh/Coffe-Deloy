
import userModel from './../models/userModel.js';


// Add product to user cart
const addToCart = async (req,res) => {

    try {
        
        const {userId, itemId, quantity} = req.body
        
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            cartData[itemId] += quantity;
         }
         else {
 
             cartData[itemId] = quantity;
         }

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({
            success: true,
            message: "Đã thêm vào giỏ hàng"
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }

}


// Update  user cart
const updateCart = async (req,res) => {

    try {

        const {userId, itemId, quantity} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({
            success: true,
            message: "Đã cập nhật giỏ hàng"
        })
        


    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }

}



// Get user cart data
const getUserCart = async (req,res) => {

    try {
        
        const {userId} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({
            success: true,
            cartData
        })

        
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }

}



export {addToCart, updateCart, getUserCart}